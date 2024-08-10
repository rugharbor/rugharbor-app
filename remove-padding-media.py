import os
import cv2
import numpy as np

INP = 'media/catalog/'
OUT = 'media/catalog1/'
os.makedirs(OUT, exist_ok=True)


# for i in os.p

def crop(x, x1):
    img = cv2.imread(x)  # Read in the image and convert to grayscale
    img = img[:-20, :-20]  # Perform pre-cropping
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = 255 * (gray < 128).astype(np.uint8)  # To invert the text to white
    gray = cv2.morphologyEx(gray, cv2.MORPH_OPEN, np.ones((2, 2), dtype=np.uint8))  # Perform noise filtering
    coords = cv2.findNonZero(gray)  # Find all non-zero points (text)
    x, y, w, h = cv2.boundingRect(coords)  # Find minimum spanning bounding box
    rect = img[y:y + h, x:x + w]  # Crop the image - note we do this on the original image
    cv2.imshow("Cropped", rect)  # Show it
    # cv2.waitKey(0)
    # cv2.destroyAllWindows()
    cv2.imwrite(x1, rect)  # Save the image


for i in os.listdir(INP):
    for j in os.listdir(INP + i):
        for k in os.listdir(f'{INP}{i}/{j}'):
            inp = f'{INP}{i}/{j}/'
            out = f'{OUT}{i}/{j}/'
            os.makedirs(out, exist_ok=True)
            print(k)
            crop(inp + k, out + k)
