# Projeto Cypress API Test - QAZANDO
Este repositório contém testes automatizados de API utilizando Cypress.

#### Tecnologias Utilizadas
[Cypress](https://www.cypress.io/) - Framework de testes automatizados
[GitHub Actions](https://github.com/features/actions) - Integração Contínua (CI/CD)
[Cypress Cloud](https://www.cypress.io/cloud) - Monitoramento de execução de testes (opcional)

#### Configuração do Projeto
1️⃣ Clonar o Repositório
```sh
git clone https://github.com/AndreCassaniga/cypress-api-test-qazando.git
cd cypress-api-test-qazando
```
2️⃣ Instalar Dependências
```sh
npm install
```
3️⃣ Executar Testes Localmente
```sh
npx cypress run
```
Caso queira rodar os testes no modo interativo:
```sh
npx cypress open
```
📂 Estrutura do Projeto
├── .github/workflows/
│   ├── cypress-pipeline.yml  	# Configuração do GitHub Actions
├── cypress/
│   ├── e2e/				  	# Arquivos de testes
│   ├── fixtures/     			# Dados mockados (se necessário)
│   ├── support/      			# Arquivos de comandos
│   ├── reports/      			# Relatórios de execução
│   ├── videos/					# Videos de execução
├── .gitignore					# Arquivos Ignorados
├── cypress.config.js  			# Configuração do Cypress
├── package.json  				# Dependências do projeto

####  Integração com GitHub Actions
Este projeto está configurado para executar os testes automaticamente ao realizar um push ou abrir um pull request na branch master. O workflow está definido em .github/workflows/cypress.yml.

#### Cypress Dashboard
Para visualizar execuções no Cypress Dashboard, utilize a chave CYPRESS_RECORD_KEY configurada nos secrets do GitHub.

#### Geração de Relatórios
Os relatórios são gerados automaticamente utilizando o Mochawesome e podem ser acessados após a execução na pasta cypress/reports/html.

#### Contribuição
Sinta-se à vontade para contribuir com este projeto! Basta abrir uma issue ou enviar um pull request.

#### Licença
Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo LICENSE.
