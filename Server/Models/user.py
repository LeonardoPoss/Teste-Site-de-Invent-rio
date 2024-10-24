class Usuario:
    id = int 
    __nome =  str
    __senha = str
    __email = str
    __cargo = str

    def __init__(self, nome, senha, cargo, email):
        self.__nome = nome 
        self.__senha = senha
        self.__cargo = cargo
        self.__email = email

    @property
    def nome (self):
        return self.__nome
    @nome.setter
    def nome (self, nome):
        self.__nome = nome

    @property
    def senha(self):
        return 

    @senha.setter
    def senha (self, senha):
        self.__senha = senha

    @property
    def email (self):
        return self.__email
    
    @email.setter
    def email (self, email):
        self.__email = email

    @property
    def cargo (self):
        return self.__cargo
    
    @cargo.setter
    def cargo (self, cargo):
        self.__cargo = cargo

    def Cadastro ():
        return 
    