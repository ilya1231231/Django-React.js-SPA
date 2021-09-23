from django.shortcuts import render



def index(request):
    return render(request, 'index.html')

def instrument_detail(request, id):
    return render(request, 'index.html')