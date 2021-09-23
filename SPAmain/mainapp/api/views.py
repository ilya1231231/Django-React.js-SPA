from rest_framework.views import APIView
from rest_framework.response import Response


class TestAPIView(APIView):
    def get(self, request, *args, **kwargs):
        data = [{"id": 1, "name": "DAVE"}, {"id": 2, "name": "ILYA"}, {"id": 3, "name": "BUCK"}]
        return Response(data)
