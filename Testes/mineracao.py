from tkinter import *

def fatorial(n: int) -> int:
    if n < 0: return None
    if n == 0: return 1
    else:
        return n * fatorial(n-1)

def calcular_fatorial():
    try:
        numero = int(entrada_dados.get())
        resultado = fatorial(numero)
        resultado_label.config(text=f"Resultado: {resultado}")
    except ValueError:
        resultado_label.config(text="Por favor, insira um número válido")

janela = Tk()
janela.title("Fatorial")
janela.geometry("300x300")

Label(janela, text="Fatorial").pack()
entrada_dados = Entry(janela)
entrada_dados.pack()
botao = Button(janela, text="Clique aqui", command=calcular_fatorial)
botao.pack()
resultado_label = Label(janela, text="")
resultado_label.pack()

janela.mainloop()