# Usa una imagen base de Node.js (o la que corresponda a tu aplicación)
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo en el contenedor
COPY package*.json ./
RUN npm install

# Copia todo el contenido de tu aplicación al directorio de trabajo
COPY . .

# Expone el puerto en el que tu aplicación escucha
EXPOSE 3000

# Comando para iniciar tu aplicación cuando se ejecute el contenedor
CMD ["npm", "run", "dev"]
