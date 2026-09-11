# Análise de dados agêntica: dos dados que a empresa já tem a uma decisão

A análise de dados agêntica não produz gráficos para arquivar: encontra sinais em dados já disponíveis, conecta-os a uma decisão e declara onde o modelo não compensa.

## O que é análise de dados agêntica

É um serviço que verifica onde os dados da empresa podem reduzir atrasos, desperdícios, erros ou riscos. Se o sinal não existe, o resultado útil é saber qual projeto não financiar.

## Situações em que se reconhecer

Estas fichas servem para se reconhecer em uma situação, não para escolher um setor. Cada situação é contada por meio de um caso real, ou seja, uma análise executada até o fim pela Artik Lab, com relatório certificado e números medidos. O método vale para qualquer empresa; os números valem para aquele caso. E se os dados não respondem à pergunta, o relatório diz isso: é o jeito mais barato de evitar um projeto errado.

### Estimo o tempo da peça de olho: se eu erro, perco a margem.

Oficina sob encomenda · Caso real · análise certificada.

In breve. O que entra: código da peça, quantidade, máquina, tempo observado. O que sai: o tempo a colocar no orçamento, como intervalo. Quem decide: quem faz o orçamento.

Na oficina cada usinagem é peça, quantidade e máquina, e o orçamento sai da experiência. A análise estima quanto tempo é preciso para uma quantidade em uma máquina e quanto da variabilidade depende da máquina em vez da peça, para que preço e data não saiam só no palpite.

**No caso real:** 2.916 usinagens em 13 máquinas. Mais da metade da diferença entre um tempo e outro, o 53%, não é explicada por nada do que a oficina registra; o tamanho do pedido pesa 32%, a máquina 9%, a peça 6%. Um pedido de uma peça exige em geral 167 unidades de tempo, um acima de dezesseis peças exige 18. Uma máquina não registra o tempo em 53% das próprias usinagens: um buraco de registro, não um milagre.

- Sinais de necessidade: orçamentos à mão sobre o desenho mesma peça, tempos diferentes conforme quem estima desvios descobertos no fim da encomenda comprador que pede prazos certos
- Dados em geral já disponíveis: código da peça ou da ferramenta quantidade máquina duração observada
- Decisão imediata: Quanto tempo colocar no orçamento, como intervalo e não como número seco. Em qual máquina convém. Onde um tempo ausente é um alarme de registro.
- Limite declarado: Não há receitas na mesma linha: não calcula a margem em euro e não substitui o arquivo único «horas previstas e reais mais receita por encomenda». A unidade de tempo precisa ser declarada na empresa.
- Descartado no relatório: quatro métodos de estimativa comparados com o tempo típico de oficina em peças nunca vistas; refinar o modelo não ganha de coletar duas ou três informações a mais por usinagem.
- Nota de método: números medidos no relatório certificado; demonstram o método, não prevêem os tempos de outra oficina.

### Todo mês o realizado não fecha com o orçamento — e não sei se é inevitável ou se são itens a mais que não estou considerando.

Controle de gestão · Caso real · análise certificada.

In breve. O que entra: orçamento e realizado por mês, linha e item de custo. O que sai: os itens em que o desvio se repete e aqueles em que é só ruído. Quem decide: quem controla os custos.

O controle de gestão compara orçamento e realizado por item: mão de obra, material, energia, logística. A análise diz onde o desvio se repete mês após mês, a corrigir, e onde muda de sinal ao acaso, a não perseguir.

**No caso real:** 144 linhas, doze meses para duas linhas e seis itens de custo. No fim do ano a produção gastou 28.879 euro a mais do que o planejado, 1,15% de um orçamento de 2,5 milhões: um valor que no balanço não alarma ninguém. Somando os desvios sem compensá-los chega-se a 79.948 euro. A prioridade é um item só, as matérias-primas entre julho e setembro: 28.478 euro, 86% do desvio anual daquele item, acumulados em três meses. Ao variar os limiares nenhum dos seis itens muda de veredito.

- Sinais de necessidade: planilha de desvio refeita no fim do mês «estamos acima do orçamento» sem saber qual item orçamento parado e processos que escorregam tempo perdido explicando desvios que são só ruído
- Dados em geral já disponíveis: por mês: linha ou centro de custo categoria de custo valor orçado valor realizado
- Decisão imediata: Sobre qual item intervir. Qual desvio aceitar como variabilidade ordinária. Como recalibrar o orçamento.
- Limite declarado: Um ano só não separa um evento de uma sazonalidade. Sem preços unitários e quantidades não distingue preço de volume. Não é previsão de faturamento, nem horas e receita na mesma encomenda.
- Descartado no relatório: o mero controle sobre o sinal dos desvios teria perdido mão de obra e logística, 31,8% do movimento bruto; conta a persistência, não o sinal.
- Nota de método: números medidos no relatório certificado; demonstram o método, não prevêem as contas de outra empresa.

### A planilha de pedidos do exterior é refeita todo mês, mas não diz quanto o faturamento depende de poucos países e clientes.

Escritório de exportação · Caso real · análise certificada.

In breve. O que entra: linhas de pedido com data, país, cliente e faturamento. O que sai: a concentração por país e cliente, e onde abrir clientes novos. Quem decide: quem conduz a exportação.

O comercial de exportação vive na tabela dinâmica: quem pediu, de qual país, quanto pesa. A análise torna legível a concentração, ou seja, quais países e clientes sustentam o faturamento e onde o risco de dependência é alto, sem inventar um mercado que nos dados não existe.

**No caso real:** 303 pedidos de 92 clientes em 19 países. Bastam 3 países em 19 para fazer metade do faturamento, enquanto são precisos 26 clientes em 92. A diferença entre os mercados não nasce do tamanho dos pedidos: o número de clientes ativos em cada país explica 82,1% do desvio, portanto a alavanca é abrir clientes nos países já cobertos mas subatendidos. Novembro vale 3,15 vezes um mês médio porque traz 3,4 vezes mais pedidos. E uma armadilha típica dos softwares de gestão: o mesmo histórico marcava um recuo de 60,94% ou um crescimento de 41,30% conforme se comparava um ano incompleto.

- Sinais de necessidade: a mesma tabela dinâmica todo mês: país, cliente, produto «França e Alemanha sustentam» dito em voz alta, sem ranking estável medo de perder um cliente grande sem vê-lo chegar exportação que salva o balanço, mas ninguém conhece a cauda longa
- Dados em geral já disponíveis: linhas de pedido com data ou mês país e cliente código de produto e quantidade faturamento, de preferência 24–36 meses
- Decisão imediata: Onde empurrar a lista. Quem cobrir de perto. Quão concentrada está a carteira. Qual data usar antes de qualquer gráfico.
- Limite declarado: Não inclui frete, tarifa aduaneira e desconto por mercado: é concentração e perfil, não margem líquida. Se o software de gestão trunca os preços, os valores são mínimos, não medidas. Com datas incoerentes no arquivo é preciso escolher uma cronologia antes dos gráficos: faz parte do trabalho, não é um detalhe de informática.
- Descartado no relatório: a hipótese «cada país tem um gosto de catálogo» cai, porque saber o país reduz só 5,8% a incerteza sobre a linha de produto. As duas datações do mesmo pedido coincidiam só em 58,55% das linhas: a análise foi refeita nas duas antes de escolher.
- Nota de método: números medidos no relatório certificado; demonstram o método, não prevêem a carteira de outra empresa.

### O cliente quer a mesma qualidade do lote passado e eu preciso «correr atrás» dos certificados de laboratório.

Adega e laboratório · Caso real · análise certificada.

In breve. O que entra: análises de laboratório por lote e classificação comercial. O que sai: os lotes a expedir, reter ou destinar a outro canal, antes do carregamento. Quem decide: quem fecha o lote.

Laboratório e certificados já existem. A análise diz, antes de fechar o lote, o quanto aquele perfil se parece com os lotes já aceitos e onde o risco de refugo ou de reclamação é mais alto. Não substitui a degustação: antecipa.

**No caso real:** 1.143 lotes com onze medidas químicas de laboratório cada um. Só com os números de laboratório o sistema reconhece com antecedência 87% dos lotes de prestígio, 108 em 124 na amostra de verificação, e quando indica um lote como de prestígio acerta em 81% dos casos. A qualidade não está em um indício só, mas em um bloco: grau alcoólico, controle da acidez volátil e estabilização com os sulfitos lidos juntos.

- Sinais de necessidade: relatórios de qualidade refeitos à mão para cada cliente ou verificação comprador que pede «como o lote de março» sem uma regra escrita não conformidades e reclamações que chegam depois da expedição certificações já em casa, mas usadas só depois
- Dados em geral já disponíveis: análises de laboratório por lote resultado do ensaio ou da degustação classificação comercial do lote histórico de reclamações ou devoluções
- Decisão imediata: Quais lotes expedir, reter ou destinar a outro canal, antes do carregamento e não depois da reclamação. Quais lotes proteger antes de cortes e misturas.
- Limite declarado: Não prevê o gosto do mercado e não substitui a degustação. Os lotes de prestígio com baixo grau alcoólico escapam com mais frequência. Sem um histórico de laboratório estruturado o primeiro resultado útil pode ser: estes dados não bastam, e eis o que falta.
- Descartado no relatório: a hipótese «basta o grau alcoólico», sinal mais forte sozinho mas insuficiente; a densidade resultou redundante com o álcool.
- Nota de método: números medidos no relatório certificado; demonstram o método, não prevêem os lotes de outra adega.

### As máquinas já registram estados e medidas, mas falha e modos diferentes de trabalhar se veem tarde.

Setor de máquinas · Caso real · análise certificada.

In breve. O que entra: estados e medidas da máquina já registrados, tempos de ciclo e paradas. O que sai: o alarme de falha em curso e os perfis de funcionamento em comparação. Quem decide: quem planeja o setor.

O orçamento e a promessa de entrega hoje saem da experiência de quem conhece o setor. A análise olha o histórico de uso e os estados da máquina, ou do processo, e torna visíveis os regimes: quando a capacidade está de fato cheia, quando um pedido urgente desloca tudo, quando a promessa não se sustenta.

**No caso real:** as medidas já registradas pelas máquinas mostraram duas coisas. Em mais de 7.600 leituras de estado, o sistema reconhece uma falha em curso em cerca de 84 casos em 100 e, quando dispara um alarme, acerta em mais de 97 vezes em 100: a falha se anuncia como uma subida conjunta de vibração, temperatura e pressão. Em cinco máquinas lidas a cada minuto surgiram oito perfis de funcionamento, com 11,4 pontos de desvio de eficiência entre o melhor e o pior: a primeira alavanca não é comprar instalações novas, é entender por que as mesmas instalações rendem de modo tão diferente.

- Sinais de necessidade: «prazos certos» na página inicial, mas plano de máquinas de memória horas extras e prioridades decididas de viva voz na oficina datas prometidas e datas reais guardadas em planilhas espalhadas comprador que pede rastreabilidade e relatório, não só a peça
- Dados em geral já disponíveis: histórico de estados ou medidas da máquina por sessão de trabalho tempos de ciclo e paradas plano ou atraso por máquina, se existir nenhum projeto novo de sensores se os registros já existem
- Decisão imediata: Aceitar ou recusar uma urgência. Deslocar um lote. Prometer uma data que se pode cumprir. Ligar o alarme de falha a uma ordem de serviço imediata.
- Limite declarado: Não calcula a margem do orçamento: horas estimadas e realizado são as duas situações acima. Reconhece uma falha em curso, não a anuncia com dias de antecedência. Os perfis de funcionamento precisam ser confirmados em uma janela mais longa do que um dia.
- Descartado no relatório: a hipótese «a falha depende do tipo de máquina» é excluída na mesma base; descartados o sensor único resolutivo e o agrupamento só pela eficiência.
- Nota de método: números medidos nos relatórios certificados; demonstram o método, não prevêem o setor de outra empresa.

## Quando a análise diz para não investir

Se os dados não respondem à pergunta, escreve-se isso no relatório, com a lista do que falta. O relatório se paga, o investimento errado não. Dois casos reais e uma página que existe em todo relatório.

### Estávamos prestes a investir em um modelo de previsão dos atrasos, mas os dados não o sustentavam.

Logística e expedições · Caso real · veredito negativo.

In breve. O que entra: entregas planejadas e resultado real do software de gestão. O que sai: o veredito: com os dados de planejamento o atraso não se prevê. Quem decide: quem deveria financiar o modelo.

Um operador logístico quer saber, no momento do planejamento da viagem, quais entregas chegarão atrasadas. A análise não força uma previsão fraca: verifica se o sinal existe nos dados disponíveis antes da partida.

**No caso real:** 85.410 entregas reconstruídas a partir de 14 tabelas de gestão; 55,4% chega além do horário previsto. Só com a informação disponível no planejamento o melhor sistema chega a uma capacidade de distinguir igual a 50,3 em 100, em que 50 é o puro acaso. O atraso nasce durante a viagem, em eventos que o software de gestão não registra: paradas no carregamento e no descarregamento, trânsito, clima, atrasos anteriores na cadeia.

- Sinais de necessidade: multas e reclamações por atrasos que ninguém vê chegar um fornecedor que propõe o modelo preditivo sobre os dados de planejamento arquivo de gestão completo e limpo, mas parado na partida
- Decisão imediata: Parar o desenvolvimento de um modelo de planejamento. Começar a registrar poucos eventos de viagem. Refazer a pergunta quando os dados novos cobrirem alguns meses.
- Limite declarado: É um limite da natureza dos dados, não da qualidade: refinar o algoritmo não cria um sinal ausente. As grandezas econômicas precisam ser recalculadas sobre os dados de quem decide.
- Descartado no relatório: distância, peso e cliente como preditores, porque o atraso é quase idêntico em cada segmento; o histórico de rota e motorista, tirado do modelo, desloca o resultado em uma quantidade irrelevante.
- Nota de método: números medidos no relatório certificado; demonstram o método, não descrevem a frota de outra empresa.

### Eu teria querido prever quais peças voltariam como devolução, mas a análise descobriu que só com as fichas de produto não se podia obter esta resposta.

Venda no varejo e devoluções · Caso real · veredito negativo.

In breve. O que entra: fichas de produto, preços, descontos, devoluções registradas. O que sai: o veredito: só com as fichas de produto a devolução não se prevê, com os quatro dados a coletar. Quem decide: quem gerencia as devoluções.

Uma loja virtual gostaria de saber quais peças voltarão. A tentação é usar os dados já cômodos: categoria, preço, cor, ficha de produto. A análise diz se nesses dados há um sinal, antes que alguém construa um sistema em cima.

**No caso real:** 2.176 peças em catálogo, pouco menos de uma peça em sete volta. Nenhum modelo supera a referência mínima: a característica mais informativa, o desconto aplicado, explica menos de 2% do fenômeno, as outras quase nada. Os métodos mais potentes foram testados e fazem pior que os simples: a potência não ajuda quando não há nada a aprender.

- Sinais de necessidade: devoluções tratadas como custo sofrido motivo da devolução preenchido depois, ou nunca proposta de um sistema preditivo só sobre as fichas de produto
- Decisão imediata: Não financiar o modelo. Começar em até três meses a coleta de quatro dados: caimento, histórico do cliente, experiência depois da entrega, motivo da devolução registrado no momento certo.
- Limite declarado: O «não» não fecha o problema: indica quais dados o tornam enfrentável. Acrescentar outros produtos com as mesmas características não acrescenta sinal.
- Descartado no relatório: o motivo da devolução como variável, porque preenchido só depois da devolução é um desfecho do fenômeno, não um sinal antecipador.
- Nota de método: números medidos no relatório certificado; demonstram o método, não descrevem as devoluções de outra empresa.

### No relatório também está o que foi testado e descartado, com os números.

Em todo relatório · Alternativas descartadas.

In breve. O que entra: os métodos e as hipóteses testados na análise. O que sai: a seção do relatório com o que foi descartado e por quê, com os números. Quem decide: quem lê o relatório.

Todo relatório certificado tem uma seção dedicada às alternativas descartadas: o que foi testado, o que foi jogado fora e por quê, com os números. É o contrário do fornecedor que traz o único método que sabe fazer.

**No caso real:** na análise dos tempos na oficina, quatro métodos de estimativa foram comparados com a referência mínima, o tempo típico de oficina, em peças nunca vistas. Nenhum refinamento do modelo ganha do enriquecimento do registro, porque 53% da variabilidade não está nos campos que a oficina preenche hoje. A recomendação foi coletar duas ou três informações a mais por usinagem, não comprar um método mais refinado.

- Métodos: O método mantido e os métodos descartados, com as medidas em comparação e a regra com que se escolheu o mais simples com o mesmo resultado.
- Hipóteses: As hipóteses excluídas com um controle e aquelas declaradas não verificáveis com os dados disponíveis, sem passar ignorância por exclusão.
- Limites: Os limites declarados antes das recomendações, não em uma nota de rodapé.
- Nota de método: nenhum algoritmo nesta página; nomes e medidas estão no relatório técnico que acompanha cada análise.

## Levar o arquivo que já se prepara à mão todo mês.

A Artik Lab diz o que o dado diz, o que não diz e se os dados bastam, antes de se comprometer com um projeto. A primeira conversa dura 30 minutos e é gratuita.

## Os painéis olham para o passado. Os dados da empresa podem ajudar a decidir o futuro.

## Entregáveis feitos para decidir

### Executive Summary

Resultado principal, decisão recomendada, valor em jogo, limites e ações para 30, 90 ou 180 dias.

### Relatório técnico

Dados usados, controles, métodos, métricas, reprodutibilidade e evidência de que o modelo supera uma referência mínima.

### Plano de ação

Piloto de baixo risco, responsabilidades, prazos, medidas a observar e critério para ampliar, alterar ou parar.

### Plano de coleta de dados

Quais dados coletar depois, por quê, com qual prioridade e qual decisão eles fortaleceriam.

## As formas de valor

### Valor recuperado

Clientes, pedidos, lotes ou reservas que podem ser salvos antes da perda de valor.

### Custo evitado

Projetos preditivos a não financiar quando os dados não contêm o sinal necessário.

### Eficiência organizacional

Recursos realocados para horários, produtos, controles ou processos que realmente importam.

### Promessa ao cliente

Entregas, disponibilidade, prazos e comunicações mais críveis graças a estimativas melhores.

### Governança de dados

Coleta menos genérica e mais ligada a decisões concretas.

## Quando o sinal não está apenas nos dados.

Muitos projetos começam pelos dados, mas o valor pode estar em documentos, emails, procedimentos, software técnico, governança ou formação. O Atlas ajuda a reconhecer a área certa antes de desenhar o primeiro projeto.

## Primeira pergunta: qual decisão deve melhorar?

## Outros sinais já demonstrados

Análises realmente executadas e certificadas em outros setores: hospitalidade, entregas, energia, restaurantes, banco, controles, manufatura, negócios locais. Cada história diz quais dados operacionais entram na análise, qual sinal emerge e qual decisão pode ser tomada. O setor é o do caso; o método é o que se transfere. Nenhum cliente reconhecível, nenhuma promessa padrão.

### 1. Hospitalidade: Descubro os cancelamentos quando já é tarde demais

Um hotel pode ler o risco já no momento da reserva: em mais de 119.000 reservas, o sistema intercepta mais de oito cancelamentos em dez.

A história é simples: a direção vê os cancelamentos só quando o dano já chegou. A análise de dados agêntica — sistemas que leem os dados, verificam o sinal e preparam a decisão — olha em vez disso os sinais disponíveis antes da estadia, como antecedência da reserva, forma de pagamento e histórico do cliente.

Para um hotel, um residencial ou um grupo de hospitalidade, o dado do motor de reservas vira uma lista de prioridade comercial. As reservas mais frágeis podem ser confirmadas, retomadas ou tratadas com condições diferentes.

O setor é diferente, o sinal é o mesmo: um pedido ou um cliente que esfria antes do recebimento, lido a tempo. Este caso vale para qualquer carteira de reservas ou pedidos com antecedência, condições de pagamento e histórico.

- Sinal útil: O sistema distingue as reservas sólidas daquelas que merecem uma intervenção preventiva.
- Decisão possível: Confirmar, retomar ou proteger primeiro as reservas mais expostas.
- Dados úteis depois: Resultado da retomada, valor recuperado e resposta do cliente.
- Limite a declarar: A análise não elimina os cancelamentos; ajuda a escolher onde intervir a tempo.

### 2. Food delivery: Perco o pedido antes mesmo da entrega

Quando a cozinha não confirma o pedido como pronto, o risco de perdê-lo sobe a 35,7%.

À primeira vista o problema parece estar na entrega final: um pedido não chega, o cliente reclama, o restaurante perde confiança. A análise mostra em vez disso que o sinal nasce antes, dentro do fluxo operacional da cozinha.

Para uma plataforma de delivery ou uma rede de restaurantes, isso muda a pergunta: não “qual entregador está atrasado?”, mas “qual pedido está saindo do processo antes mesmo de ser entregue?”.

- Sinal útil: A ausência de uma confirmação intermediária vira um aviso operacional.
- Decisão possível: Ativar na hora uma cobrança, uma reatribuição ou uma comunicação ao cliente.
- Dados úteis depois: Causa registrada, recuperação do pedido e custo do transtorno.
- Limite a declarar: O modelo funciona se os estados intermediários do pedido forem bem registrados.

### 3. Última milha: Prometo um horário e depois o atendimento explode

A estimativa do tempo de entrega passa de um erro médio de cerca de 41 minutos para cerca de 17 minutos.

Em muitas empresas de logística urbana o problema não é só entregar mais depressa. É prometer um horário realista, para que o cliente espere menos, o atendimento receba menos ligações e a frota seja coordenada melhor.

A análise parte dos pedidos e dos tempos históricos, mas não para na média. Busca condições recorrentes que tornam uma entrega mais lenta ou mais rápida e as transforma em uma previsão mais útil.

- Sinal útil: Uma janela de chegada mais confiável para cada entrega.
- Decisão possível: Atualizar comunicações ao cliente, prioridades operacionais e planejamento da frota.
- Dados úteis depois: Reclamações, ligações evitadas e intervenções manuais da equipe operacional.
- Limite a declarar: Não promete entregas mais rápidas; promete estimativas mais críveis.

### 4. Energia: Compra-se energia no palpite e pagam-se as correções quando a previsão está errada.

A previsão reduz o erro em 77% em relação à regra de referência.

Um operador energético ou um grande consumidor precisa decidir antes quanta energia comprar, cobrir ou reservar. Se a previsão é excessivamente prudente, imobiliza recursos; se é baixa demais, expõe a custos e correções.

A análise lê a série histórica dos consumos horários e constrói um perfil esperado do dia seguinte. O resultado não é um gráfico para arquivar, mas um apoio ao planejamento energético.

- Sinal útil: Um perfil horário esperado mais confiável do que a regra usada como comparação.
- Decisão possível: Comprar, se cobrir ou planejar capacidade com menos margem defensiva.
- Dados úteis depois: Preços, custos de desbalanceamento e regras de suprimento.
- Limite a declarar: A economia em dinheiro precisa ser calculada com os números reais do contrato energético.

### 5. Restaurantes: Peço e monto os turnos como na semana passada

A previsão das receitas melhora 24% em relação à regra “como na semana passada”.

Um restaurante decide toda semana quanta matéria-prima pedir e quantas pessoas colocar em turno. Se decide no palpite, corre o risco de desperdício nos dias fracos e de serviço insuficiente nos dias fortes.

A análise parte do histórico das receitas e reconhece o ritmo real do local. A previsão vira uma ferramenta prática para preparar cozinha, salão e compras antes que a demanda chegue.

- Sinal útil: Uma estimativa das receitas futuras mais sólida do que a regra empírica.
- Decisão possível: Acompanhar a previsão nas escolhas sobre compras, preparos e turnos.
- Dados úteis depois: Desperdício real, vendas perdidas e custo de pessoal.
- Limite a declarar: O valor nasce só se a previsão muda decisões operacionais.

### 6. Varejo alimentar: Vejo o desperdício quando já é tarde

Os lotes mais arriscados desperdiçam quase três vezes os mais seguros.

Em um supermercado ou em uma cadeia alimentar, o desperdício não aparece de uma vez. Nasce de pequenos sinais: embalagem, movimentação, frio, prazos de chegada, prioridade de venda.

A análise lê esses sinais quando o lote entra no processo e cria uma graduação de risco. O ponto não é prever cada perda, mas decidir quais lotes controlar, girar ou descontar antes.

- Sinal útil: Uma lista de lotes que merecem atenção antes da deterioração visível.
- Decisão possível: Concentrar controles, giros e baixas preventivas nos lotes mais expostos.
- Dados úteis depois: Valor salvo, motivo do desperdício e margem depois da intervenção.
- Limite a declarar: Nem todo desperdício é previsível; o objetivo é usar melhor as ações preventivas.

### 7. Banco: O cliente vai embora e eu descubro depois

O sistema reconhece cerca de três clientes em risco em quatro.

Um banco pode ver um cliente sair só quando a conta já está perdida, ou pode ler antes os sinais de esfriamento da relação. A análise distingue o risco genérico da alavanca comercial sobre a qual agir.

A história útil não é “este cliente vai abandonar”, mas “este cliente mostra sinais de inatividade e pode ser reativado com uma ação dirigida”. É uma diferença decisiva para construir campanhas críveis.

O setor é diferente; o tipo de pergunta, quem está prestes a ir embora, é o mesmo para qualquer carteira de clientes, também entre empresas.

- Sinal útil: Uma prioridade de contato baseada em comportamento e risco de abandono.
- Decisão possível: Iniciar campanhas de reativação dirigidas, não comunicações iguais para todos.
- Dados úteis depois: Histórico comportamental, contatos feitos e valor retido.
- Limite a declarar: Reconhecer o risco hoje não significa sempre prevê-lo com larga antecedência.

### 8. Alimentação rápida: O cardápio está cheio mas eu ganho em poucos itens

Poucos momentos do dia e poucos itens de cardápio geram quase três quartos do faturamento.

Em uma rede de alimentação rápida, o problema não é só vender mais. É entender onde o faturamento nasce de fato: quais faixas de horário pedem pessoal, quais produtos merecem estoque, quais itens ocupam espaço sem render.

A análise descritiva vira uma história operacional: o cardápio não é todo igual e o dia não pesa todo do mesmo jeito. Isso ajuda a decidir turnos, estoques e promoções com menos impressões e mais evidência.

- Sinal útil: Um mapa dos produtos e dos momentos que sustentam o resultado econômico.
- Decisão possível: Realinhar pessoal, compras, promoções e revisão do cardápio.
- Dados úteis depois: Margem por item, tempos de preparo e rupturas de estoque.
- Limite a declarar: Não é uma previsão; é uma prioridade operacional a completar com dados de margem.

### 9. Manutenção industrial: A máquina para e eu descubro tarde

Com os sensores disponíveis, a análise reconhece cerca de 84% das falhas observadas.

Na fábrica a falha não é só um evento técnico: para pessoas, pedidos e capacidade produtiva. Muitas máquinas já têm sensores, mas os sinais ficam dispersos ou são lidos tarde demais.

A análise constrói um aviso quando o comportamento da máquina se parece com situações de falha já vistas. É útil se ativa na hora uma ordem de serviço, um controle ou uma verificação em campo.

Deve ser lida junto com a situação sobre as máquinas do setor , acima.

- Sinal útil: Um alarme operacional quando a máquina mostra padrões compatíveis com uma falha.
- Decisão possível: Ligar o aviso a manutenção, escalonamento e verificação da parada evitada.
- Dados úteis depois: Tempo de intervenção, custo da parada e peças de reposição usadas.
- Limite a declarar: Reconhecer uma falha em curso não é a mesma coisa que prevê-la semanas antes.

### 10. Conformidade: Tenho mais controles a fazer do que consigo acompanhar

Com o mesmo número de verificações, o ranking intercepta mais casos graves.

Um órgão de controle ou uma função de conformidade tem sempre mais casos a verificar do que consegue acompanhar na hora. A pergunta não é fazer controles infinitos, mas decidir a ordem certa.

A análise usa o histórico das verificações para construir uma lista de prioridades. Os controles permanecem humanos, mas a agenda é ordenada de modo a aumentar a probabilidade de encontrar primeiro os casos mais sérios.

- Sinal útil: Uma graduação de risco para programar verificações e acompanhamentos.
- Decisão possível: Ordenar inspeções, auditorias ou controles internos sem aumentar o orçamento.
- Dados úteis depois: Resultado do controle, reincidência, gravidade e tempo de retorno à conformidade.
- Limite a declarar: O modelo não decide sanções; ajuda a ordenar as prioridades.

### 11. Manufatura: A mesma máquina rende de modo diferente e eu não sei por quê

Entre os perfis operacionais emerge um desvio de 11,4 pontos de eficiência.

Na produção, o consumo médio muitas vezes esconde histórias diferentes. A mesma máquina pode trabalhar de modos mais ou menos eficientes, mas o dado energético bruto não explica na hora o porquê.

A análise agrupa os comportamentos da máquina e mostra quais perfis merecem comparação. Antes de comprar sensores ou instalações novas, a empresa pode se perguntar quais condições operacionais distinguem o perfil que rende daquele que desperdiça.

- Sinal útil: Um mapa dos perfis de funcionamento, não só do consumo médio.
- Decisão possível: Comparar perfis melhores e piores e iniciar um piloto de redução de desperdícios.
- Dados úteis depois: Custo de energia, horas de máquina, produção e regulagens operacionais.
- Limite a declarar: O valor em euro deve ser estimado só quando consumos e produção estão ligados.

### 12. Negócio local: Centenas de avaliações, nenhuma decisão

Em 2.961 avaliações de vinte negócios da mesma categoria e zona, nenhum respondia às avaliações recebidas.

Um negócio local vive das escolhas de quem lê avaliações antes de entrar, mas do lado de quem dirige restam uma média em estrelas e um fluxo de textos que ninguém resume. As avaliações do negócio e dos concorrentes da mesma praça viram uma lista de ações em ordem de prioridade, não um painel de métricas a interpretar: um documento que diz por onde começar.

A análise não olha só o negócio: recolhe também os concorrentes da mesma zona e mede as mesmas dimensões em todos. É a comparação que torna um número legível, porque uma média alta diz pouco enquanto não se sabe quão alta é a média de quem está ao redor.

No caso real o veredito não veio da média em estrelas, que já era ótima, mas de duas coisas que ninguém tinha contado: seis das sete avaliações críticas falavam do mesmo tema, e nenhum dos vinte negócios da zona respondia a quem escrevia.

- Sinal útil: As avaliações críticas não estão espalhadas: seis em sete giram em torno de um único tema. É ali que se intervém, não em tudo.
- Decisão possível: Responder às avaliações, o que na zona ninguém fazia, e explicar com antecedência o que o preço inclui.
- Dados úteis depois: Resultado das respostas publicadas, pedidos de orçamento depois da publicação, avaliações novas sobre o mesmo tema.
- Limite a declarar: Os números vêm de um conjunto de avaliações públicas congelado em uma data: fotografam aquela zona naquele momento, não prevêem os resultados de outro negócio.

## Perguntas frequentes

### Substitui os painéis de controlo já em uso (Business Intelligence)?

Não. Os painéis de controlo já em uso (Business Intelligence) vigiam indicadores conhecidos; a análise agêntica diagnostica causas, procura sinais pouco evidentes e liga o resultado a uma decisão.

### Já são precisos dados perfeitos, num único arquivo?

Não. O primeiro valor pode ser justamente verificar se os dados existentes servem, que limites têm e que dados recolher depois.

### O que acontece se não houver sinal?

O método declara o veredito negativo e indica que investimento evitar, ou que recolha de dados iniciar antes de financiar um modelo.

### Os casos do atlas são clientes da Artik Lab?

Não. São análises realmente executadas e certificadas pela Artik Lab sobre arquivos operacionais do mesmo tipo dos que existem nas empresas, sem clientes reconhecíveis. Os números demonstram o método; não preveem os resultados de outra empresa.

### O que é preciso para a primeira conversa?

O extrato que já se prepara à mão todos os meses e a decisão que deveria melhorar. Em 30 minutos, gratuitos, fica claro se os dados chegam, o que falta e que primeiro projeto faz sentido, antes de assumir compromissos.

### Onde ficam os dados durante a análise?

Trabalha-se sobre um extrato acordado, com um perímetro escrito.
