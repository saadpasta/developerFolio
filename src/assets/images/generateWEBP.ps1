
Get-ChildItem "." -Filter *.jpg | 
Foreach-Object {
    Write-Host $_.Name
    $in = $_.Name
    $out = $in.Split(".")[0]
    ffmpeg -i $in -c:v libwebp "$out.webp"
}