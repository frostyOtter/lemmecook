import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { API_Response } from "@/types";

/**
 * Component for Premium Page
 */
const PremiumPage = () => {
  // Hooks for authentication
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  // State to hold the short link
  const [shortLink, setShortLink] = useState<string | null>(null);
  // State to track if the payment is processed
  const [paymentProcessed, setPaymentProcessed] = useState(false);

  /**
   * Handles the submission for premium payment
   */
  const handlePremiumSubmit = async (): Promise<void> => {
    try {
      // Make a POST request to the payment endpoint
      const response = await axios.post<API_Response>('http://localhost:1233/payment');
      // Extract the short link from the response
      const resultJson = response.data;
      // Set the short link to state
      setShortLink(resultJson.shortLink);
      // Set paymentProcessed to true
      setPaymentProcessed(true);
    } catch (error) {
      // Log any errors that occur during the request
      console.error('Error fetching result:', error);
    }
  };

  return (
    <span className="flex space-x-2 items-center flex-col gap-12">
      {/* Check if the user is authenticated */}
      {isAuthenticated ? (
        <div className="flex flex-col gap-12">
          {/* Button to initiate premium payment */}
          {!paymentProcessed ? (
            <Button
              variant="ghost"
              className="font-bold text-orange-500 hover:text-yellow-500 hover:bg-black"
              onClick={handlePremiumSubmit}
            >
              Process Payment
            </Button>
          ) : null}
          {/* Display the short link if available */}
          {shortLink && (
            <div className="font-bold text-orange-500 hover:text-yellow-500 hover:bg-black">
              Short Link: <a href={shortLink} target="_blank" rel="noopener noreferrer">{shortLink}</a>
            </div>
          )}
        </div>
      ) : (
        // Show login button if not authenticated
        <Button 
          variant="ghost" 
          className="font-bold text-orange-500 hover:text-yellow-500 hover:bg-black"
          onClick={async () => await loginWithRedirect()}
        >
          Login
        </Button>
      )}
    </span>
  );
};

export default PremiumPage;