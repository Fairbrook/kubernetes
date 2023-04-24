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

