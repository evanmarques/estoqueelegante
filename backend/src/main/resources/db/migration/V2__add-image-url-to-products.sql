-- V2__add-image-url-to-products.sql
-- Adiciona a coluna image_url na tabela products para armazenar a URL da imagem do produto

ALTER TABLE products
ADD COLUMN image_url VARCHAR(255);
