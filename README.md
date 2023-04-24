# Kubernetes

__Autor:__ Kevin Alan Martínez Virgen 219294382

__Materia:__ Computación tolerante a fallas


## Investigación

### ¿Que es Kubernetes?
Kubernetes (K8s) es una plataforma de código abierto para automatizar la 
implementación, el escalado y la administración de aplicaciones en contenedores

### ¿Qué es Ingress?
Es una API de Kubernetes que administra el accesso externo a los servicios de
los cluster, típicamente HTTP

Puede proporcionar Load Balancing, SSL y hosting virtual basado en nombres

Expone rutas http y https desde fuera de los de los clusters a los servicios 
dentro del cluster. El tráfico de la rutas está controlado por reglas definidas
en el recurso de Ingress

### ¿Qué es un Load Balancer?
Un balanceador de carga actúa como único punto de contacto para los clientes. 
El balanceador de carga distribuye el tráfico entrante de aplicaciones entre 
varios destinos, diferentes servidores, en varias zonas de disponibilidad. 
Esto aumenta la disponibilidad de la aplicación.


### Fuentes
- https://kubernetes.io/es/docs/concepts/overview/what-is-kubernetes/
- https://kubernetes.io/docs/concepts/services-networking/ingress/
- https://docs.aws.amazon.com/es\_es/elasticloadbalancing/latest/application/introduction.html

## Ejemplo
En este caso se va a utilizar una aplicación ejemplo escrita en NodeJS y ExpressJs
junto con un ingress para exponer el proceso a la máquina local

### Creación de cluster | kind
Para utilizar kubernetes de forma local existen varias herramientas, la elegida
para esta demostración fue kind
Y despues debemos de crear un cluster
![install kubernetes](https://raw.githubusercontent.com/Fairbrook/kubernetes/main/imgs/create-cluster.png)

### Creación de imaen de docker
Kind puede utilizar imágenes de docker construidas localmente por lo que primero
debemos construir la imagen de la aplicación muestra
![docker image](https://raw.githubusercontent.com/Fairbrook/kubernetes/main/imgs/docker-build.png)

### Cargado de imagen
Para hacer visible la imagen de docker al cluster es necesario ejecutar el comando
siguiente
![load docker image](https://raw.githubusercontent.com/Fairbrook/kubernetes/main/imgs/load-image.png)

### Install Ingress
Para utilizar ingress es necesario instalar un motor de ingress, en este caso
se escogió nginx
![nginx install](https://raw.githubusercontent.com/Fairbrook/kubernetes/main/imgs/install-ingress-nginx.png)

### Apply
Finalmente se puede aplicar la configuración del pod, servicio e ingress mediante
el siguiente comando
![apply](https://raw.githubusercontent.com/Fairbrook/kubernetes/main/imgs/apply.png)

### Resultado
El resutlado final es que podemos hacer la petición desde la dirección definina
por ingress
![success](https://raw.githubusercontent.com/Fairbrook/kubernetes/main/imgs/success.png)
