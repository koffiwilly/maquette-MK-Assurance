# Utilise l'image officielle PHP avec Apache
FROM php:8.3-apache

# Installe les dépendances système
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    zip \
    unzip \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql mbstring exif pcntl bcmath gd

# Active les modules Apache nécessaires
RUN a2enmod rewrite headers mime expires

# Configure le ServerName global pour éviter l'avertissement
RUN echo "ServerName mkassurance.fr" >> /etc/apache2/apache2.conf

# Installe Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configure le répertoire de travail
WORKDIR /var/www/html

# Copie la configuration Apache personnalisée
COPY apache-config/000-default.conf /etc/apache2/sites-available/000-default.conf

# Change le propriétaire des fichiers
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expose le port 80
EXPOSE 80

# Démarre Apache en avant-plan
CMD ["apache2ctl", "-D", "FOREGROUND"]