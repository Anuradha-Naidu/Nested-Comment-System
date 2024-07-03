# Nested-Comment-System



## Introduction

The Comment System allows users to comment on posts and reply to comments. Each user can edit or delete their comments, with replies nested under the original comments. The system maintains a simple one-level nesting to keep the comment threads manageable and readable.

## Features

- Users can comment on posts.
- Users can reply to comments (one level of nesting).
- Users can edit and delete their comments.
- Automatically adjusts nesting on comment deletion.

## Requirements

- Python 3.8 or above
- Docker (for containerized setup)
- pip3 (Python package installer)

## Installation

### Local Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/comment-system.git
    cd comment-system
    ```

2. **Create a virtual environment:**

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Run the application:**

    ```bash
    python3 app.py
    ```

    This will start the application locally.

### Containerized Setup

1. **Build the Docker image:**

    ```bash
    docker build -t comment-system .
    ```

2. **Run the Docker container:**

    ```bash
    docker run -p 5000:5000 comment-system
    ```

    This will start the application inside a Docker container and make it accessible on `http://localhost:5000`.

## Usage

1. **Access the application:**

    Open your web browser and go to `http://localhost:5000`.

2. **Add a post:**

    Use the form to add a new post.

3. **Comment on a post:**

    Navigate to a post and use the comment form to add a comment.

4. **Reply to a comment:**

    Click on the reply button below a comment to add a nested comment.

5. **Edit or delete a comment:**

    Use the edit and delete buttons to modify or remove your comments.

## Project Structure

## Created Backend and Frontend separately, it might crash due to errors arised 

```plaintext

CommentSystem/
│
├── backend/
│   ├── commentsystem/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   ├── asgi.py
│   │   ├── __pycache__/
│   │   └── ...
│   │
│   ├── comments/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations/
│   │   │   ├── __init__.py
│   │   │   └── ...
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   ├── views.py
│   │   ├── __pycache__/
│   │   └── ...
│   │
│   ├── manage.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Comment.js
│   │   │   ├── CommentList.js
│   │   │   ├── Post.js
│   │   │   ├── PostList.js
│   │   │   └── ...
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   ├── index.css
│   │   └── ...
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   └── ...
│
├── docker-compose.yml
└── README.md
```
## Screenshots : 



