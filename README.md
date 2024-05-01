# 1. **Objetivo**

Criar um sistema simples para gerenciar tarefas, utilizando TDD, padrões de projeto e boas práticas de desenvolvimento.

# 2. **Requisitos Funcionais**

* **Cadastro de tarefas:**
  * Nome da tarefa (obrigatório)
  * Descrição (opcional)
  * Data de vencimento (opcional)
  * Prioridade (alta, média, baixa)

* **Consulta de tarefas:**
  * Filtrar por nome, descrição, data de vencimento, prioridade ou status (pendente, concluída)
  * Ordenar por qualquer campo
  * Visualizar detalhes da tarefa (nome, descrição, data de vencimento, prioridade, status)

* **Atualização de tarefas:**
  * Editar qualquer campo da tarefa
  * Marcar como concluída ou pendente

* **Exclusão de tarefas:**
  * Remover tarefas da lista

# 3. **Regras de Negócio**

* Uma tarefa deve ter um nome.
* A prioridade da tarefa deve ser alta, média ou baixa.
* Uma tarefa pode ser concluída ou pendente.
* Uma tarefa não pode ser excluída se estiver concluída.

# 4. **Padrões de Projeto usados**

* **TDD (Test-Driven Development):**  Escrever testes unitários antes de implementar o código.
* **Repository Pattern:**  Criar um repositório para encapsular o acesso aos dados.
* **Factory Pattern:**  Criar uma fábrica para criar objetos de tarefa.
* **SOLID:**  Seguir os princípios SOLID para escrever código limpo e maintainable.
* **Clean Arc:**  Seguir a arquitetura Clean Arc para separar responsabilidades e facilitar testes.
* **Clean Code:**  Escrever código limpo e fácil de ler.