import os
import json
from PIL import Image

def generate_app_icon_set(source_image_path):
    # Ensure source exists
    if not os.path.exists(source_image_path):
        print(f"Error: {source_image_path} not found.")
        return

    # Create the output directory structure
    output_dir = "AppIcon.appiconset"
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    try:
        original = Image.open(source_image_path)
    except Exception as e:
        print(f"Error opening image: {e}")
        return

    # Define the specifications based on your table
    # Format: (Point Size, Scale, Idiom, Filename Suffix)
    specs = [
        # Notifications (20pt)
        (20, 2, "iphone", "20x20@2x"),
        (20, 3, "iphone", "20x20@3x"),
        
        # Settings (29pt)
        (29, 2, "iphone", "29x29@2x"),
        (29, 3, "iphone", "29x29@3x"),
        
        # Home Screen (New/Specific Request 38pt)
        (38, 2, "iphone", "38x38@2x"),
        (38, 3, "iphone", "38x38@3x"),
        
        # Spotlight (40pt)
        (40, 2, "iphone", "40x40@2x"),
        (40, 3, "iphone", "40x40@3x"),
        
        # Home Screen Standard (60pt)
        (60, 2, "iphone", "60x60@2x"),
        (60, 3, "iphone", "60x60@3x"),
        
        # iPad App Icon (76pt)
        (76, 2, "ipad", "76x76@2x"),
        
        # iPad Pro App Icon (83.5pt)
        (83.5, 2, "ipad", "83.5x83.5@2x"),
        
        # App Store (1024pt)
        (1024, 1, "ios-marketing", "1024x1024@1x")
    ]

    contents_json = {
        "images": [],
        "info": {
            "version": 1,
            "author": "xcode"
        }
    }

    print(f"Generating icons from {source_image_path}...")

    for point_size, scale, idiom, filename_suffix in specs:
        # Calculate actual pixel dimensions
        pixel_size = int(point_size * scale)
        
        filename = f"Icon-{filename_suffix}.png"
        filepath = os.path.join(output_dir, filename)
        
        # Resize using Lanczos for high quality downsampling
        # The .save() method automatically converts JPEG source to PNG output
        resized_icon = original.resize((pixel_size, pixel_size), Image.Resampling.LANCZOS)
        resized_icon.save(filepath, "PNG")
        
        # Add entry to Contents.json
        size_str = f"{point_size:g}x{point_size:g}"
        
        entry = {
            "size": size_str,
            "idiom": idiom,
            "filename": filename,
            "scale": f"{scale}x"
        }
        contents_json["images"].append(entry)
        
        print(f"Generated {filename} ({pixel_size}x{pixel_size}px)")

    # Write Contents.json
    json_path = os.path.join(output_dir, "Contents.json")
    with open(json_path, 'w') as f:
        json.dump(contents_json, f, indent=2)

    print(f"\nSuccess! 'AppIcon.appiconset' created.")
    print("Drag this folder directly into your Xcode Asset Catalog.")

if __name__ == "__main__":
    # Auto-detect the file extension
    if os.path.exists("master_icon.png"):
        generate_app_icon_set("master_icon.png")
    elif os.path.exists("master_icon.jpg"):
        generate_app_icon_set("master_icon.jpg")
    elif os.path.exists("master_icon.jpeg"):
        generate_app_icon_set("master_icon.jpeg")
    else:
        print("Error: Could not find 'master_icon.png', 'master_icon.jpg', or 'master_icon.jpeg'.")
        print("Please save your image in this folder with one of those names.")
