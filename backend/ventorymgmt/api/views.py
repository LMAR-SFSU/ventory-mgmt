from rest_framework.response import Response
from rest_framework.decorators import api_view

# GET method that will return mock data
@api_view(['GET'])
def get_data(request):
    sample_data = {'name': 'Ventory Management app', 'year': 2025}
    return Response(data=sample_data)
