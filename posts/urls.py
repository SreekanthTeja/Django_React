from django.urls import path,include
from .views import (PostListView,PostDetailView,PostCreateView,PostUpdate,PostDelete)

urlpatterns = [
    path('', PostListView.as_view()),
    path('create/', PostCreateView.as_view()),
    path('<pk>', PostDetailView.as_view()),
    path('<pk>/update/', PostUpdate.as_view()),
    path('<pk>/delete/', PostDelete.as_view()),
]