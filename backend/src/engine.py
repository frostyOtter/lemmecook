# load libraries
import elasticsearch
from loguru import logger
from pydantic import BaseModel
from utils import get_user_list

class recipe_model(BaseModel):
    title:str
    ingredients:str
    time:int
    cook:str
    images:str

class user_profile(BaseModel):
    user_email:str
    is_premium:bool
    trial_time:int

class SearchEngine:
    def __init__(self, id_name:str, api_key:str, index_name:str, user_index:str)->None:
        # init client
        self.client = elasticsearch.Elasticsearch(
                cloud_id= id_name,
                api_key= api_key
            )

        self.index_name = index_name
        self.user_index = user_index

    def update_recipe(self, input_recipe:dict)->None:
        try:
            recipe_model.model_validate(input_recipe)
            recipe = []
            recipe.append({"index": {"_index": "recipes"}})
            recipe.append(input_recipe)

            self.client.bulk(index = self.index_name, operations= recipe, refresh=True)
            print("Updated 1 record")
        except Exception as e:
            print(e)
            pass
        
    def search_one_feature(self, input_query:str, input_feature:str)->dict:
        response = self.client.search(
            index= self.index_name,
            query={"match": {input_feature: {"query": input_query}}}
        )
        if len(response["hits"]["hits"]) == 0:
            logger.debug(f"Your search in {input_feature} returned no results, query: {input_query}")
            return {}
        else:
            response = response["hits"]["hits"]

        return response


    def search_many_feature(self, input_query:str, input_features:list)->dict:
        if not isinstance(input_features, list):
            logger.debug("features input must be in a list")
            return {}
        if len(input_features) == 1:
            logger.debug("Use search_one_feature if searching a single field.")
            return {}
        
        response = self.client.search(
                index= self.index_name,
                query={"multi_match": {"query": input_query, "fields": input_features}},
                )
        if len(response["hits"]["hits"]) == 0:
            logger.debug(f"Your search in {input_features} returned no results, query: {input_query}")
            return {}
        else:
            response = response["hits"]["hits"]
            
        return response
    
    def delete_one_record(self, input_feature:str):
        pass

    def check_user(self, input_user_email:str):
        list_users = get_user_list()
        if input_user_email in list_users:
            return True
        else:
            return False
        
    
    def update_user_info(self, input_user_profile:dict)->None:
        user_profile.model_validate(input_user_profile)

    def check_trial_time(self, input_user_email:str) -> int:
        if self.check_user(input_user_email = input_user_email):
            all_data = get_user_list(all_data=True)

            current_user_info = all_data[all_data["user_email"] == input_user_email]
            if current_user_info["is_premium"]:
                return 10
            
            else:
                trial_time_left = current_user_info["trial_time"].values[0]
                return int(trial_time_left)

        else:
            return 0