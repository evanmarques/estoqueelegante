CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    price DOUBLE PRECISION NOT NULL,
    stock_quantity INTEGER NOT NULL,
    bar_code VARCHAR(255) UNIQUE NOT NULL
);