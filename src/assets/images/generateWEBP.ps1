
Get-ChildItem "." -Filter *.svg | 
Foreach-Object {
    Write-Host $_.Name
    $in = $_.Name
    $out = $in.Split(".")[0]
    & "C:\Program Files\Inkscape\bin\inkscape.exe" -o "$out.png" -w 300 $in
    ffmpeg -i "$out.png" -c:v libwebp "$out.webp"
}