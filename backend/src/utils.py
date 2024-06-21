import os
from loguru import logger
script_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
script_dir = script_dir + "/data/img/"

import re

def translate_vietnamese_name(name):
    # Remove accents and special characters
    name = re.sub(r'[àáảãạăằắẳẵặâầấẩẫậ]', 'a', name)
    name = re.sub(r'[èéẻẽẹêềếểễệ]', 'e', name)
    name = re.sub(r'[ìíỉĩịôồốổỗộơờớởỡợ]', 'o', name)
    name = re.sub(r'[ùúủũụưừứửữự]', 'u', name)
    name = re.sub(r'[ỳýỷỹỵ]', 'y', name)
    name = re.sub(r'[đ]', 'd', name)
    name = re.sub(r'[ ]', '_', name)

    # Replace multiple spaces with a single space
    name = re.sub(r' +', ' ', name)

    # Remove leading and trailing spaces
    name = name.strip()

    # Replace spaces with underscores
    name = name.replace(' ', '_')

    return name

def get_image_path(input_recipe_name:str)->str:

    alphabet_name = translate_vietnamese_name(name= input_recipe_name)
    image_path = script_dir + alphabet_name
    if os.path.isfile(image_path + ".jpg"):
        return image_path + ".jpg"
    elif os.path.isfile(image_path + ".png"):
        return image_path + ".png"
    
    else:
        return script_dir + "banh_it.jpg"
    
if __name__ == "__main__":
    temp_food_name = "trứng chiên hành thơm ngon, mềm xốp"
    logger.info(temp_food_name)
    food_name = translate_vietnamese_name(temp_food_name)
    logger.debug(food_name)
    image_path = get_image_path(food_name)
    logger.debug(image_path)