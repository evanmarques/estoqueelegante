-- V3__add-image-url-to-products.sql
-- Adiciona a coluna image_url na tabela products (nova versão)

ALTER TABLE products
ADD COLUMN image_url VARCHAR(255);
