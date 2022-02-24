ffmpeg -i balancingHub.mp4 -b:v 400k -c:v libvpx -pix_fmt yuva420p -auto-alt-ref 0 -filter:v scale=854:480 -an balancingHub.webm

ffmpeg -i boids.mp4 -b:v 500k -c:v libvpx -pix_fmt yuva420p -auto-alt-ref 0 -filter:v scale=640:360 -an boids.webm

ffmpeg -i dada.mp4 -b:v 1000k -c:v libvpx -pix_fmt yuva420p -auto-alt-ref 0 -filter:v scale=640:360 -an dada.webm

ffmpeg -i EmptySpaces.mp4 -b:v 2000k -c:v libvpx -pix_fmt yuva420p -auto-alt-ref 0 -filter:v scale=1280:720 -an EmptySpaces.webm

ffmpeg -i fractalWebSnippet.mp4 -b:v 2000k -c:v libvpx -pix_fmt yuva420p -auto-alt-ref 0 -filter:v scale=1280:720 -an fractalWebSnippet.webm

ffmpeg -i HauntedForest.mp4 -c:v libvpx -b:v 2000k -pix_fmt yuva420p -auto-alt-ref 0 -filter:v scale=1280:720 -an HauntedForest.webm

ffmpeg -i td.mp4 -c:v libvpx -b:v 1000k -pix_fmt yuva420p -auto-alt-ref 0 -filter:v scale=640:360 -an TDCratos.webm
