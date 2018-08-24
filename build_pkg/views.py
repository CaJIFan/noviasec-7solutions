from django.shortcuts import render

# Create your views here.
def build_pkg(request):
    wedding_type = request.GET.get('wedding_type')
    return render(request, 'build_pkg.html', {'title':'Paquetes de bodas',
                                                'wedding_type':wedding_type})

def services_list(request):
    pkg_name = request.GET.get('pkg_name').strip()
    servicios = ['banquete','local','sonido','vestuario']
    return render(request, 'services_list.html',{'pkg_name':pkg_name,
                                                'servicios': servicios,
                                                'title':'Lista de servicios'})

def total(request):
    pkg = request.GET.get('pkg').strip()
    serv_type = request.GET.get('serv_type').strip()
    lista_servicios = request.GET.get('serv_seleccionados').split("%")
    lista_servicios = [servicio.replace("%20%"," ") for servicio in lista_servicios]

    return render(request, 'total.html', {'lista_servicios': lista_servicios,
                                            'pkg':pkg,
                                            'serv_type' : serv_type,
                                            'total':4000,
                                            'title':'Detalle de servicios'})
def wedding_type(request):
    return render(request, 'tipo_boda.html',{'title':'Tipo de boda'})
