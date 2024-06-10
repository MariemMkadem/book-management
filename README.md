
# test_books

## Introduction
Ce projet vise à développer une librairie pour gérer une collection de livres en utilisant Node.js et TypeScript, avec une base de données PostgreSQL.

## Installation et Configuration

### Prérequis
- Node.js (version recommandée : 14.x ou supérieure)
- TypeScript
- PostgreSQL
- npm (Node Package Manager)

### Installation
1. Cloner le dépôt :
    ```bash
    git clone <URL_DU_DEPOT>
    ```

2. Naviguer dans le répertoire du projet :
    ```bash
    cd test_books
    ```

3. Installer les dépendances :
    ```bash
    npm install
    ```

### Configuration
Configurer les paramètres de connexion à la base de données dans un fichier `.env` :
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database
```

Assurez-vous que le fichier `tsconfig.json` est correctement configuré pour TypeScript.

## Structure du Projet
```
test_books/
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── main.ts
│   ├── config/
│   │   ├── config.constant.ts
│   │   ├── data-source.config.ts
│   │   └── inversify.config.ts
│   ├── modules/
│   │   ├── application/
│   │   │   └── controllers/
│   │   │       └── books.controller.ts
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   ├── inputs/
│   │   │   │   │   ├── books/
│   │   │   │   │   │   ├── book-create.input.ts
│   │   │   │   │   │   ├── book-update.input.ts
│   │   │   │   │   │   └── books-search.input.ts
│   │   │   │   ├── output/
│   │   │   │   │   ├── pagination.output.ts
│   │   │   │   │   ├── books/
│   │   │   │   │   │   └── book.output.ts
│   │   │   ├── services/
│   │   │   │   ├── inbounds/
│   │   │   │   │   ├── books/
│   │   │   │   │   │   ├── book-create.service-inbound.ts
│   │   │   │   │   │   ├── book-update.service-inbound.ts
│   │   │   │   │   │   └── books-search.service-inbound.ts
│   │   │   │   ├── outbounds/
│   │   │   │   │   ├── books/
│   │   │   │   │   │   ├── book-create.service-outbound.ts
│   │   │   │   │   │   ├── book-update.service-outbound.ts
│   │   │   │   │   │   └── books-search.service-outbound.ts
│   │   │   ├── usecases/
│   │   │   │   ├── books/
│   │   │   │   │   ├── book-create.usecase.ts
│   │   │   │   │   ├── book-update.usecase.ts
│   │   │   │   │   └── books-search.usecase.ts
│   │   ├── infrastructure/
│   │       ├── database/
│   │           ├── entities/
│   │           │   └── user.ts
│   │           └── repositories/
│   │               ├── books/
│   │               │   ├── book-create.repository.ts
│   │               │   ├── book-update.repository.ts
│   │               │   └── books-search.repository.ts
```

