# Use official Python image as base
FROM python:3.9

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt ./ 
RUN pip install --no-cache-dir -r requirements.txt


# Copy project files
COPY . .

# Expose port
EXPOSE 8001

# Run Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8001"]
