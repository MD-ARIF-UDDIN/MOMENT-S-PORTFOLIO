import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_og_banner(output_path, is_square=False):
    width, height = (800, 800) if is_square else (1200, 630)
    
    # Base luxury dark gradient background
    base = Image.new("RGBA", (width, height), (13, 13, 16, 255))
    
    # Add subtle warm radial glow in the center
    glow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    center_x, center_y = width // 2, height // 2 - (20 if not is_square else 30)
    max_radius = int(min(width, height) * 0.7)
    
    # Draw radial gradient rings
    for r in range(max_radius, 0, -10):
        alpha = int(35 * (1 - r / max_radius))
        glow_draw.ellipse(
            [center_x - r, center_y - r, center_x + r, center_y + r],
            fill=(30, 26, 22, alpha)
        )
    
    base = Image.alpha_composite(base, glow)
    draw = ImageDraw.Draw(base)
    
    # Subtle elegant border
    inset = 24 if not is_square else 28
    draw.rectangle(
        [inset, inset, width - inset, height - inset],
        outline=(255, 255, 255, 22),
        width=1
    )
    
    # Inner gold corner accents
    corner_len = 30
    gold_color = (212, 175, 55, 140)
    c_inset = inset + 8
    # Top Left
    draw.line([(c_inset, c_inset), (c_inset + corner_len, c_inset)], fill=gold_color, width=2)
    draw.line([(c_inset, c_inset), (c_inset, c_inset + corner_len)], fill=gold_color, width=2)
    # Top Right
    draw.line([(width - c_inset, c_inset), (width - c_inset - corner_len, c_inset)], fill=gold_color, width=2)
    draw.line([(width - c_inset, c_inset), (width - c_inset, c_inset + corner_len)], fill=gold_color, width=2)
    # Bottom Left
    draw.line([(c_inset, height - c_inset), (c_inset + corner_len, height - c_inset)], fill=gold_color, width=2)
    draw.line([(c_inset, height - c_inset), (c_inset, height - c_inset - corner_len)], fill=gold_color, width=2)
    # Bottom Right
    draw.line([(width - c_inset, height - c_inset), (width - c_inset - corner_len, height - c_inset)], fill=gold_color, width=2)
    draw.line([(width - c_inset, height - c_inset), (width - c_inset, height - c_inset - corner_len)], fill=gold_color, width=2)
    
    # Load white logo
    logo = Image.open("public/logo-white.png").convert("RGBA")
    
    # Scale logo appropriately
    if is_square:
        target_h = 360
    else:
        target_h = 280
        
    aspect = logo.width / logo.height
    target_w = int(target_h * aspect)
    logo_resized = logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Paste logo in upper-center
    if is_square:
        logo_y = 120
    else:
        logo_y = 80
        
    logo_x = (width - target_w) // 2
    base.paste(logo_resized, (logo_x, logo_y), logo_resized)
    
    # Load fonts
    try:
        font_sub = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 22 if not is_square else 26)
        font_sub_italic = ImageFont.truetype("C:/Windows/Fonts/georgiai.ttf", 20 if not is_square else 24)
        font_tagline = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 14 if not is_square else 16)
    except:
        font_sub = ImageFont.load_default()
        font_sub_italic = ImageFont.load_default()
        font_tagline = ImageFont.load_default()
        
    # Text line 1: "PHOTOGRAPHY & CINEMATOGRAPHY"
    text1 = "P H O T O G R A P H Y   &   C I N E M A T O G R A P H Y"
    bbox1 = draw.textbbox((0, 0), text1, font=font_sub)
    w1 = bbox1[2] - bbox1[0]
    y1 = logo_y + target_h + (35 if not is_square else 45)
    draw.text(((width - w1) // 2, y1), text1, fill=(218, 185, 120, 255), font=font_sub)
    
    # Subtle dividing ornament / line
    line_y = y1 + (40 if not is_square else 48)
    line_w = 120
    draw.line([(width // 2 - line_w, line_y), (width // 2 + line_w, line_y)], fill=(255, 255, 255, 40), width=1)
    # Small diamond in center of line
    d_size = 4
    draw.polygon([
        (width // 2, line_y - d_size),
        (width // 2 + d_size, line_y),
        (width // 2, line_y + d_size),
        (width // 2 - d_size, line_y)
    ], fill=(218, 185, 120, 220))
    
    # Text line 2: "Weddings • Stories • Lifetime"
    text2 = "Weddings  •  Stories  •  Lifetime"
    bbox2 = draw.textbbox((0, 0), text2, font=font_sub_italic)
    w2 = bbox2[2] - bbox2[0]
    y2 = line_y + (20 if not is_square else 24)
    draw.text(((width - w2) // 2, y2), text2, fill=(210, 210, 215, 230), font=font_sub_italic)
    
    # Text line 3: Location & Contact
    text3 = "BANSHKHALI, CHATTOGRAM  •  01643-666825"
    bbox3 = draw.textbbox((0, 0), text3, font=font_tagline)
    w3 = bbox3[2] - bbox3[0]
    y3 = y2 + (36 if not is_square else 42)
    draw.text(((width - w3) // 2, y3), text3, fill=(140, 140, 145, 180), font=font_tagline)
    
    # Convert RGBA to RGB for JPEG or save PNG
    rgb_im = base.convert("RGB")
    rgb_im.save(output_path, quality=95, optimize=True)
    print(f"Saved {output_path} ({width}x{height})")

if __name__ == "__main__":
    os.makedirs("public", exist_ok=True)
    create_og_banner("public/og-image.jpg", is_square=False)
    create_og_banner("public/og-square.jpg", is_square=True)
    create_og_banner("public/og-whatsapp.jpg", is_square=True)
    # Also save PNG versions for Next.js App Router root
    create_og_banner("public/opengraph-image.png", is_square=False)
