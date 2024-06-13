# Guide to enable SSL on your developerFolio website
### Requirements:
1. Docker
2. docker-compose
### Procedure
1. First, change the server name in `https.conf` file.
2. run the command `docker-compose up -d` to install the `developerFolio`, `nginx` and `certbot`
3. The webside should be accessible on port 80 of your server FQDN.
## If you want to enable SSl then follow the below steps:
1. Run the following command to request certificates of your website, replace the email and `ahsan-raza.com` with your FQDN.

```
docker run --rm --name temp_certbot     -v ./certbot/conf:/etc/letsencrypt     -v ./certbot/www:/var/www/certbot/     certbot/certbot:v1.8.0     certonly --webroot --agree-tos --renew-by-default     --preferred-challenges http-01 --server https://acme-v02.api.letsencrypt.org/directory     --text --email your-email@gmail.com     -w /var/www/certbot/ -d ahsan-raza.com
```

2. Unomment the below lines of code present in https.conf 
```
    if ($scheme = "http") {
        return 301 https://$server_name$request_uri;
    }
```
3. Uncomment the server block of SSL i.e. running on 443. replace the `ahsan-raza.com` in the `ssl_certificate` path and `server_name` with your FQDN {check below lines which are to change for reference}

```
server {
   server_name ahsan-raza.com; # managed by Certbot

   access_log  /var/log/nginx/access.log  main;

   gzip on;
   gzip_types text/plain application/json;



   add_header X-Frame-Options "SAMEORIGIN";
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
   location / {
       proxy_pass http://portfolio:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
   }
   listen 443 ssl;# managed by Certbot
   ssl_certificate /etc/letsencrypt/live/ahsan-raza.com/fullchain.pem; # managed by Certbot
   ssl_certificate_key /etc/letsencrypt/live/ahsan-raza.com/privkey.pem; # managed by Certbot


}

```

4. Remove the nginx container and run `docker-compose up -d` again to reflect the changes.