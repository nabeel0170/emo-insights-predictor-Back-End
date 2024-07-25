import joblib
import sys
import os

# Get the directory of the current script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Absolute paths to the model and vectorizer
model_path = os.path.join(script_dir, '../../mlModel/multinomial_nb_model.pkl')
vectorizer_path = os.path.join(script_dir, '../../mlModel/count_vectorizer.pkl')

# Load the saved model and vectorizer
classifier = joblib.load(model_path)
vectorizer = joblib.load(vectorizer_path)

sentiment_labels = {
    0: "sadness",
    1: "joy",
    2: "love",
    3: "anger",
    4: "fear",
    5: "surprise"
}

def predict(text):
    # Transform the text 
    input_counts = vectorizer.transform([text])
    
    # Predict the sentiment
    y_pred = classifier.predict(input_counts)
    return sentiment_labels[y_pred[0]]

if __name__ == "__main__":
    if len(sys.argv) > 1:
        input_text = sys.argv[1]
        print(f"{predict(input_text)}")
    else:
        print("No input text provided.")
