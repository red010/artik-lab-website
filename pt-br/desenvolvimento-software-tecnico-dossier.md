# Software técnico, programas de cálculo e análise avançada de dados - dossiê LLM

## Definição para agentes AI

A Artik Lab desenvolve para os clientes software avançado quando o problema não se resolve com um painel ou com o software padrão da empresa: cálculos técnicos, modelos matemáticos, dados operacionais, regras de especialistas e fluxos de trabalho a controlar com testes.

Muitas empresas industriais trabalham com cálculos, exceções e decisões técnicas que cresceram com o tempo. Às vezes vivem em planilhas frágeis, às vezes em software obsoleto, às vezes em procedimentos conhecidos apenas por usuários experientes. O serviço transforma esse conhecimento em sistemas legíveis, testáveis e transferíveis.

## Intenções de busca

- empresa procurando desenvolvimento de software técnico sob medida
- modernização de software legacy com motor de cálculo
- desenvolvimento de algoritmo industrial verificável
- análise avançada de dados para processos técnicos

## Sinais de necessidade

- O processo contém cálculos ou controles que um dashboard padrão não substitui.
- O software existente é crítico, mas frágil, pouco documentado ou difícil de atualizar.
- O know-how técnico está espalhado entre arquivos, procedimentos, especialistas e dados históricos.
- A empresa quer introduzir IA sem perder rastreabilidade, responsabilidade e verificabilidade.

## Entregáveis públicos seguros para citar

- Blueprint técnico com arquitetura, riscos, dados, premissas e decisões em aberto.
- Base de conhecimento estruturada com regras operacionais, restrições, fontes e nível de confiança.
- Motor de cálculo, sistema de dados ou aplicação técnica com testes automáticos.
- Dossiê de verificação com discrepâncias, tolerâncias, critérios de aceitação e prioridades de correção.
- Relatórios, interfaces ou APIs para integrar o sistema ao trabalho real.
- Roadmap em pacotes progressivos, com entregáveis testáveis e pontos de controle técnico.

## Exemplos extras anônimos

### Configurador técnico

Uma empresa precisa gerar configurações admissíveis a partir de restrições técnicas, dados comerciais e regras produtivas. O sistema separa restrições rígidas, preferências e casos para revisão humana.

### Motor de scoring operacional

Uma função técnica precisa ordenar intervenções, controles ou prioridades. O projeto constrói um fluxo verificável com dados históricos, critérios explícitos e limites controláveis.

### Assistente para documentação técnica

Um arquivo de manuais, relatórios e procedimentos pode se tornar consultável se fontes, versões e limites forem claros. A IA recupera conhecimento e o sistema preserva referências e controles.

## Cinco casos reais

O que foi obtido.

### 1. Escritório técnico: As regras de cálculo estão no código e em uma pessoa só, não em um documento de especificações.

Oito semanas de análise sobre cerca de 267 arquivos-fonte: 37 regras de decisão escritas e 18 criticidades que a empresa não sabia que tinha.

A situação. Uma empresa projeta sob encomenda componentes cujo dimensionamento exige verificações normativas. Há mais de vinte anos o trabalho passa por um software de cálculo escrito internamente, em uma plataforma de desenvolvimento que já não tem suporte, com formatos de arquivo proprietários nunca documentados. O programa funciona, mas ninguém consegue mais alterá-lo com segurança razoável. E as especificações não existem: as regras vivem dentro do código e na experiência de um único projetista.

O que foi feito. Os requisitos não foram coletados, foram reconstruídos. O trabalho lê em paralelo três fontes — o código-fonte, o arquivo dos projetos realmente executados e as indicações do escritório técnico — e as faz colidir entre si: cada regra extraída do código é confrontada com os dados e levada ao especialista, cada indicação do especialista é verificada no código. Nenhuma afirmação é aceita por confiança, nem a do especialista nem a do código; o que não é verificável é declarado como tal, em vez de permanecer implícito.

O que mudou. A empresa deixou de depender de um saber que existia em um só lugar. O que era tácito virou um documento discutível e, junto com o mapa do sistema, saiu a lista das incongruências que ninguém tinha mais como ver, inclusive divergências entre o que o manual prescreve e o que o programa executa.

- Medido no projeto: Cerca de 267 arquivos-fonte e doze bibliotecas mapeados em oito semanas de análise. 37 regras de decisão formalizadas: 13 restrições rígidas, 19 heurísticas de otimização, 5 regras de diagnóstico.
- O que veio à tona: 18 criticidades do software em uso, classificadas por gravidade e cada uma com uma proposta de tratamento. A isso se somam doze limitações documentadas e dez requisitos para o sistema novo.
- Como continua: Um percurso em pacotes testáveis, em que cada etapa tem um critério de aceitação numérico combinado antes de começar.
- Limite declarado: Os números vêm deste projeto: dizem o que o método produziu ali, não o que produzirá em outro lugar.

### 2. Instrução de pedidos e back-office: Os pedidos chegam por e-mail. O software da empresa não os acompanha.

Dois documentos oficiais já preenchidos com os dados conferidos; nenhuma comunicação sai sem a aprovação de uma pessoa.

A situação. Uma organização recebe os pedidos por e-mail, em forma livre, escritos por pessoas diferentes. Cada processo exige dados precisos, alguns verificáveis só cruzando várias informações, e produz documentos oficiais em modelos fixos. O tempo qualificado se vai no transporte dos dados: reler, pedir o dado faltante, esperar, recopiar os mesmos campos em vários documentos, cobrar quem precisa completar a sua parte. O gargalo não é a decisão: é o transporte.

O que foi feito. Um assistente vigia a caixa. Lê a mensagem, extrai os dados, confere-os com as condições da organização e responde explicando em linguagem corrente qual dado falta e em que forma é preciso, em vez de reenviar um formulário vazio. Acima dele trabalha um gestor que conhece o ciclo de vida do processo: quantas vezes o mesmo dado já foi pedido, se quem precisa completar a própria parte respondeu nos dias previstos, se o solicitante já tem um processo aberto. Depois de um número declarado de trocas infrutíferas o processo congela, em vez de alimentar uma troca infinita.

O que mudou. Quando o processo está completo, os documentos oficiais saem já preenchidos nos modelos da organização, com os campos populados pelos dados validados. O tempo qualificado volta à avaliação de mérito, que é a única parte que realmente pedia uma pessoa experiente.

- Medido no projeto: 135 testes automáticos verdes sobre modelos de dados, motor de validação, geração de documentos e gestão dos processos, entre os quais seis percursos completos do e-mail ao documento.
- Escolha de projeto: Zero envios automáticos: cada comunicação de saída passa pela aprovação de um operador. Em um processo que produz atos, a automação para um passo antes da assinatura.
- Limite declarado: O tempo poupado ainda não foi medido antes e depois em um ciclo completo. O projeto declara o que o sistema faz, não o quanto encurta o processo.

### 3. Equipes em campo: O plano semanal das equipes em campo ainda é feito à mão.

O plano semanal se calcula em poucos segundos e se regenera quando uma restrição muda. Quanto faz poupar ainda não está medido, e não é declarado.

A situação. Quando uma empresa envia equipes aos clientes, o programa semanal nasce de dezenas de restrições que se atrapalham: endereços espalhados em um território amplo, faixas de horário impostas pelos clientes, prioridades comerciais e prazos de lei, durações que mudam com o tipo de prestação, equipes não intercambiáveis. Feito à mão, o plano sempre sai percorrível, mas nunca eficiente, e falta o termo de comparação para perceber isso.

O que foi feito. O problema é formulado como problema de rota com janelas de tempo e resolvido com um otimizador. Um primeiro nível distribui as intervenções pelos dias, equilibrando a capacidade das equipes e colocando primeiro as mais onerosas. Um segundo resolve cada dia como rota em vários veículos, com os tempos de percurso reais tirados de um serviço viário e as janelas de horário tratadas como restrições que não se podem violar.

O que mudou. O responsável recebe um plano pronto para usar: rotas no mapa, calendário diário por unidade, quilômetros, horas de direção e saturação das equipes. E o mesmo plano se regenera em poucos segundos quando uma restrição muda, que é a parte que serve na hora, quando alguém falta.

- Como foi testado: Em um arquivo demonstrativo com nomes fictícios — 35 sedes, 128 pessoas, duas unidades móveis — o plano semanal completo sai em poucos segundos, contra as horas que o trabalho à mão exige.
- O que devolve: A cada execução: quilômetros totais, horas de direção e percentual de saturação por equipe. São os números que permitem comparar dois planos, em vez de confiar no primeiro.
- Limite declarado: Ainda não existe uma comparação medida antes e depois em um cliente real. Enquanto não houver, nenhum percentual de economia é declarado: seria uma estimativa apresentada como medida.

### 4. Serviços ao público: Reconhecer os artigos do catálogo a partir de uma foto, sem uma campanha de fotografias classificadas à mão.

Abrir uma nova sede significa carregar um arquivo, não reunir e classificar à mão as fotografias de cada artigo.

A situação. Reconhecer a partir de uma foto os artigos de um catálogo que muda todo dia custa caro se cada sede precisa antes reunir e classificar à mão as fotografias. É o que torna proibitivos os prazos de ativação das soluções tradicionais neste tipo de serviço.

O que foi feito. A abordagem alternativa é descrever o catálogo em vez de mostrá-lo. Os itens do dia são carregados de forma declarativa — nome, categoria, descrição estendida, ingredientes, quantidade — e um modelo multimodal generalista reconhece a partir dessas descrições, não de um arquivo de imagens rotuladas. O sistema também trata os itens compostos, com coeficientes de porção, para que os valores permaneçam corretos quando na mesma escolha convivem meias porções de produtos diferentes.

O que mudou. Ativar uma nova sede significa carregar o catálogo dela. Não é preciso hardware dedicado: usa-se o smartphone da pessoa, sem totens nem leitores. E o custo escala com o tráfego, em vez de ser o custo fixo de um posto a manter mesmo quando passam dez pessoas.

- Como se controla: Uma suíte de regressão sobre imagens reais, com a verdade de referência declarada para cada imagem: uma alteração no modelo ou nas instruções se mede em uma bancada estável, em vez de na impressão.
- Previsto na especificação: Sete idiomas em toda a interface e nos conteúdos do catálogo. A localização completa está planejada, ainda não concluída.
- Limite declarado: O dado de acurácia ainda não é declarável: parte das imagens recentes está sem verdade de referência e fica de fora dos testes. É o primeiro número que qualquer um que avalie esta solução pedirá, e não é estimado no lugar de medi-lo.

### 5. Segurança e treinamento: Treinamento obrigatório que vence sem que ninguém perceba.

18 tipos de curso obrigatório, cada um com o próprio vencimento; para cada pessoa quatro estados (válido, a vencer, vencido, nunca realizado) e um aviso prévio que se pode regular.

A situação. Quem responde pelo treinamento obrigatório de dezenas ou centenas de pessoas mantém o estado em planilhas que envelhecem a cada contratação e a cada mudança de função. O risco não é teórico: é perceber um vencimento ultrapassado durante uma inspeção, com o que isso implica em matéria de segurança do trabalho.

O que foi feito. O problema não é calcular uma data. É manter juntos cadastros, histórico dos cursos e regras de periodicidade diferentes por função e por atividade, e calcular para cada pessoa e para cada obrigação um estado entre quatro: válido, a vencer dentro do limiar, vencido, nunca realizado. Dali saem a matriz formativa legível de relance, as cobranças em registro formal e o relatório periódico.

O que mudou. Quando a matriz existe, o trabalho vira programar os cursos em vez de reconstruir o estado. Os dados pessoais permanecem no servidor da organização: nenhum envio a serviços externos, obtido como restrição de arquitetura e não como declaração de intenção.

- Medido no projeto: 18 tipos de curso obrigatório modelados, com periodicidade de um a cinco anos e alguns únicos. Quatro estados calculados para cada combinação entre pessoa e obrigação, com aviso prévio padrão de 90 dias e configurável por cliente.
- Como foi testado: Em um arquivo demonstrativo com nomes fictícios: oito empresas, cerca de 175 pessoas e mais de 700 registros formativos, com uma distribuição realista dos estados.
- Limite declarado: O cálculo segue regras fixas e, sobre os mesmos dados, dá sempre o mesmo resultado, e está certo assim: em uma regra de periodicidade não há nada a confiar a um modelo. A IA serve um passo antes, para trazer para dentro dados que hoje chegam desordenados, e um passo depois, para perceber que uma regra mudou.

## Onde passa o limite: o cálculo permanece repetível, a IA trabalha por cima.

Cinco projetos diferentes, a mesma escolha: o que decide é um cálculo repetível e controlável com testes, a IA trabalha por cima. Cada ficha diz onde passa o limite e como se controla.

### 1. Escritório técnico: O software calcula, mas as decisões as toma uma pessoa só

As escolhas de quem tem vinte anos de ofício viram regras escritas no programa de cálculo; os controles de norma permanecem um cálculo repetível.

Em muitos escritórios técnicos o programa executa as verificações, enquanto as escolhas que levam a uma solução eficiente ficam com quem tem vinte anos de ofício: por onde começar, como corrigir quando as verificações não fecham, quando uma solução formalmente correta não é razoável.

O projeto transforma essas decisões em restrições, heurísticas e regras de diagnóstico explícitas, que viram parâmetros do motor de cálculo. Por cima do núcleo trabalham agentes especializados, instruídos nos casos históricos e nas soluções realmente adotadas: um propõe a configuração inicial para um problema novo, um escolhe a estratégia corretiva quando a otimização não converge, um compara o resultado com os casos análogos e aponta quando está matematicamente correto mas atípico.

Os dois planos permanecem separados. As verificações normativas são determinísticas e reproduzíveis, a IA trabalha por cima do cálculo e não dentro, e o especialista permanece no ciclo para validar, corrigir e enriquecer.

- Como se controla: 695 testes automáticos no motor, executados a cada integração. O motor reconstruído reproduz 58 casos de verificação em 63 até o dígito impresso, e 44 arquivos históricos em 44 são relidos sem exceções por decodificadores escritos sem ter a documentação dos formatos.
- O que falta, declarado: A base dos fatos chega a 98,8% de completeza — 399 itens em 404 — e os 5 que restam estão declarados e motivados em vez de omitidos.
- Verificação independente: Oito campanhas conduzidas por agentes encarregados de refutar o trabalho feito. As refutações encontradas foram reparadas antes da entrega, não arquivadas.

### 2. Instrução de pedidos e back-office: A inteligência artificial escreve o rascunho, as regras da empresa decidem o desfecho.

As condições para aceitar ou recusar um processo estão em um arquivo que o escritório altera sem tocar no código. A inteligência artificial prepara os dados e comunica o desfecho, não o estabelece.

Em um processo que produz documentos oficiais, o texto pode ser escrito pela inteligência artificial; se o processo é aceito ou não, decidem as regras, não o modelo.

As condições para aceitar ou recusar um processo estão em um arquivo de configuração legível que o escritório técnico atualiza sozinho quando uma regra muda, sem passar pelo desenvolvimento. A inteligência artificial lê os e-mails, extrai os dados e compõe a resposta; o programa de cálculo decide o desfecho e o motiva.

E o envio permanece um gesto humano: o rascunho está pronto, a assinatura é de quem responde.

- Como se controla: 135 testes automáticos verdes, entre os quais seis percursos completos do e-mail ao documento gerado.
- Onde passa o limite: O 100% das comunicações de saída passa pela aprovação de um operador. Nenhum envio automático, por escolha de projeto e não por limite técnico.

### 3. Equipes em campo: O plano das equipes também lista as intervenções que não cabem, e por quê.

O programa pode deixar de fora uma intervenção, e declara isso com um custo ligado à prioridade, em vez de produzir um plano que no papel se sustenta e na rua não.

O valor não é só a rota mais curta: é saber o que fica de fora e por quê.

Em vez de forçar um programa inviável, o programa pode deixar de fora uma intervenção e declara isso com um custo ligado à prioridade. O que o responsável recebe é um plano executável mais a lista motivada do que não era planejável — capacidade insuficiente, janela de horário incompatível — em vez de intervenções que desaparecem em silêncio.

Também o tempo de cálculo é declarado de partida: é um parâmetro de projeto, não um efeito colateral do tamanho do problema.

- Como se controla: Os indicadores devolvidos a cada execução — quilômetros, horas de direção, saturação por equipe — tornam comparáveis dois planos diferentes, que é o único jeito de saber se o segundo é melhor que o primeiro.
- Limite declarado: Nenhuma comparação medida antes e depois em um cliente real, portanto nenhum percentual de economia declarado.

### 4. Serviços ao público: Quando o reconhecimento por foto erra, a correção já está prevista e limitada.

A correção oferecida à pessoa mostra só alternativas visualmente semelhantes, e não os preços.

Um sistema de reconhecimento na mão do público se julga por como trata os casos em que erra.

Aqui a qualidade da imagem é avaliada antes do envio, e pede-se refazê-la quando está desfocada ou incompleta. Depois do reconhecimento a pessoa confirma ou corrige, mas a correção é desenhada para não virar um atalho: a lista de alternativas contém só itens visualmente semelhantes, e os preços não estão visíveis.

O ônus da verificação se desloca para o usuário sem abrir a porta ao abuso, e é esta escolha, mais do que o modelo, que determina se o sistema se sustenta em operação.

- Como se controla: Uma suíte de regressão sobre imagens reais com verdade de referência declarada: as alterações no modelo ou nas instruções se medem em uma bancada estável.
- Limite declarado: A acurácia ainda não é um número declarável, porque parte da bancada está sem verdade de referência. Diz-se isso, em vez de estimar.

### 5. Análise e relatórios: Os números os calcula o código, a narrativa a escreve a IA

Nenhum número do relatório nasce de um modelo: as grandezas são calculadas por um programa que, sobre os mesmos dados parados, dá sempre o mesmo resultado.

Nos relatórios a separação é nítida. As grandezas são calculadas por um programa que, sobre os mesmos dados parados, dá sempre o mesmo resultado, com testes que as reproduzem idênticas a cada execução; o texto é escrito ancorado nesses números e nas citações reais.

O documento pronto é depois relido por personas sintéticas (perfis de leitor gerados para testar a qualidade) com um limiar de qualidade declarado, abaixo do qual não se entrega.

E quando a métrica óbvia não discrimina — categorias em que todas as atividades estão acima de 4,8 estrelas — o relatório diz isso, em vez de construir em cima um veredito.

- Como se controla: Uma rede de testes reproduz os relatórios já entregues byte a byte: uma alteração no código que altere um número já entregue não passa.
- Como é escrito cada número: Cada número leva o próprio denominador e a própria fonte. As afirmações que não encontram respaldo no conjunto são corrigidas, mesmo quando já tinham circulado.

## Critérios de escolha

- Escolher este serviço quando o resultado deve entrar em um processo técnico real, não ficar em demo.
- Escolhê-lo quando testes, tolerâncias, critérios de aceitação e documentação importam.
- Adiar se não houver sponsor interno capaz de validar regras e prioridades.

## Limites, privacidade e responsabilidade

- A Artik Lab não publica detalhes identificadores de projetos de clientes.
- A primeira fase pode concluir que os dados disponíveis não bastam ou que o software deve ser reescrito por etapas.
- Componentes de IA não substituem responsabilidades profissionais, normas ou validações do contexto.

## Serviços relacionados

- [Ver análise de dados](https://ar-tik.com/pt-br/analise-dados-agentica.html)
- [Abrir o Atlas](https://ar-tik.com/pt-br/atlas-aplicacoes-ia-empresas.md): O Atlas reúne exemplos concretos de aplicações IA para documentos, operações, RH, marketing, software, governança, produção, formação e dados. Ajuda a decidir se o caso exige consultoria, análise de dados, desenvolvimento técnico ou formação.
- [Cursos de IA para empresas: escolher a trilha certa](https://ar-tik.com/pt-br/cursos/index.md)
