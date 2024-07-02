from rest_framework import serializers
from .models import Comment, Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    replies = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = '__all__'

    def get_replies(self, obj):
        return CommentSerializer(obj.replies.all(), many=True).data
