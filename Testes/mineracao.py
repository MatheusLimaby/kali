import numpy as np
import matplotlib.pyplot as plt


# Define a função do segundo grau
def funcao_segundo_grau(a, b, c, x):
    return a * x**2 + b * x + c

# Gera valores de x
x = np.linspace(-100, 100, 100)

# Calcula os valores de y usando a função do segundo grau
a, b, c = 1, 2, 5  # Coeficientes da função do segundo grau
y = funcao_segundo_grau(a, b, c, x)

# Plota a função do segundo grau
plt.plot(x, y, label=f'{a}x^2 + {b}x + {c}')
plt.xlabel('x')
plt.ylabel('y')
plt.title('Função do Segundo Grau')
plt.legend()
plt.grid(True)
plt.show()