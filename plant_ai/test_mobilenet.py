import torch
from torchvision.models import (
    mobilenet_v3_small,
    MobileNet_V3_Small_Weights,
)
from PIL import Image

# Pobierz gotowy model MobileNet i jego wagi.
weights = MobileNet_V3_Small_Weights.DEFAULT
model = mobilenet_v3_small(weights=weights)
model.eval()

# Wczytaj zdjęcie, które chcesz przeanalizować.
image = Image.open("plant.jpg").convert("RGB")

# Przygotuj obraz w formacie wymaganym przez model.
preprocess = weights.transforms()
image_tensor = preprocess(image).unsqueeze(0)

# Uruchom analizę zdjęcia.
with torch.no_grad():
    output = model(image_tensor)
    probabilities = output.softmax(dim=1)[0]

# Wyświetl 10 najbardziej prawdopodobnych klas.
scores, indices = probabilities.topk(10)
categories = weights.meta["categories"]

for score, index in zip(scores, indices):
    print(f"{categories[index.item()]}: {score.item():.2%}")