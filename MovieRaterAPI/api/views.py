from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Movie, Rating
from .serializers import MovieSerializer, RatingSerializer
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication


# Create your views here.
class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    authentication_classes = (TokenAuthentication,)

    # http://127.0.0.1:8000/api/movies/1/rate_movie/
    @action(detail=True, methods=["POST"])
    def rate_movie(self, request, pk=None):
        if "stars" in request.data:
            movie = Movie.objects.get(id=pk)
            stars = request.data["stars"]
            user = request.user

            try:
                rating = Rating.objects.get(user=user.id, movie=movie.id)
                rating.stars = stars
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                response = {"message": "Rating updated", "result": serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            except:
                rating = Rating.objects.create(user=user, movie=movie, stars=stars)
                serializer = RatingSerializer(rating, many=False)
                response = {"message": "Rating created", "result": serializer.data}
                return Response(response, status=status.HTTP_200_OK)

        else:
            response = {"message": "you need to provide stars"}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    # This line was in video but it doesn't change anything, need to figure out why we need it
    # authentication_classes = (TokenAuthentication,)
