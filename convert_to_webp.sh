for file in src/assets/images/*.{png,jpg}; do
    cwebp -q 100 "$file" -o "${file%.*}.webp"
done
