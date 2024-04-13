\c turismo;

CREATE TABLE IF NOT EXISTS "package"(
    "package_id" SERIAL PRIMARY KEY,
    "package_destiny" varchar(100) NOT NULL,
    "package_price" decimal NOT NULL,
    "package_vacancies" int NOT NULL,
    "package_date" Date NOT NULL,
    "package_points" int NOT NULL,
    "package_description" varchar(500));

CREATE TABLE IF NOT EXISTS "user_app"(
    "user_id" SERIAL PRIMARY KEY,
    "user_name" varchar(100) NOT NULL,
    "user_email" varchar(200) NOT NULL,
    "telephone" bigint NOT NULL,
    "address" varchar(60) NOT NULL,
    "cpf" varchar(12) NOT NULL,
    "password" varchar(100) NOT NULL,
    "profile" int NOT NULL);

CREATE TABLE IF NOT EXISTS "package_user"(
    "package_id" int REFERENCES package (package_id),
    "user_id" int REFERENCES user_app (user_id),
    CONSTRAINT bill_product_pkey PRIMARY KEY (package_id, user_id)
);

CREATE TABLE IF NOT EXISTS "budget"(
    "budget_id" SERIAL PRIMARY KEY,
    "budget_destiny" varchar(100) NOT NULL,
    "budget_date" Date NOT NULL,
    "amountOfPeople" int NOT NULL,
    "proposal" varchar(500),
    "user_id" int NOT NULL,
    "package_id" int NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_app(user_id),
    FOREIGN KEY (package_id) REFERENCES package(package_id)
);

