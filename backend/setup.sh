# Pre-configuracao necessaria:
# -- NODE VERSION > 10.1: node -v
# -- INSTALAR O ADONISJS E EXPO
# - npm i -g @adonisjs/cli
# - npm i -g expocli
##
# -- Entrar na pasta backend e mobile e rodar NPM INSTALL

# 1 - Renomeia o arquivo .env.example para .env
# 2 - Abre o arquivo .env
# 3 - Adiciona o ip, senha, database e user do banco de dados nas respectivas variaveis.
# 4 - Salva e fecha
# 5 - Escreve " sh setup.sh " no terminal

echo "Instalando os pacotes NPM"
npm install

echo "Criado a chave privada do Adonisjs"
adonis key:generate

echo "Rodando as migrations"
adonis migration:run

echo "Abrindo o servidor"
adonis serve --dev
