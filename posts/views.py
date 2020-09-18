from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from rest_framework import permissions,authentication
from rest_framework.response import Response


# Create your views here.

from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
class PostListView(ListAPIView):
    # def get(self,requset):
    #     print(requset.user.is_authenticated)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
class PostCreateView(CreateAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializer
    permission_classes = (permissions.AllowAny, )
class PostUpdate(UpdateAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializer
    permission_classes = (permissions.AllowAny, )
class PostDelete(DestroyAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializer
    permission_classes = (permissions.AllowAny, )
    
    
    