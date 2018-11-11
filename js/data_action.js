data_action = [
    {
        title: "Atacar",
        icon: "crossed-swords",
        subtitle: "Ataque corpo-a-corpo ou à distância",
        description: "Realiza um ataque-a-corpo ou à distância com sua arma",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certas características, como o <i>Ataque Adicional</i> do guerreiro, permitem que você realize mais de um ataque com essa ação. Cada um desses ataques usa uma jogada de ataque separada e pode ter diferentes alvos. Você pode se mover entre ataques.",
            "Quando você realiza a ação Atacar e ataca com uma arma corpo-a-corpo leve que está empunhando em uma mão, você pode usar uma ação bônus para atacar com uma arma corpo-a-corpo leve diferente que está empunhando na outra mão (veja a ação bônus <i>Atacar com mão inábil</i>).",
            "Você pode substituir um de seus ataques corpo-a-corpo por um <i>Agarrão</i> ou um <i>Encontrão</i>.",
            "Algumas condições concedem vantagem ao ataque: ataques contra alvos cegos, paralisados, petrificados, impedidos, atordoados ou inconscientes; ataques corpo-a-corpo contra alvos caídos; ataques realizados por criaturas invisíveis ou escondidos.",
            "Algumas condições concedem desvantagem ao ataque: ataques contra alvos invisíveis ou escondidos; ataques à distância contra inimigos caídos; ataques realizados por criaturas cegas, amedrontadas, envenenadas ou impedidas."
        ]
    },
    {
        title: "Agarrar",
        icon: "grab",
        subtitle: "Ataque corpo-a-corpo especial",
        description: "Tentativa de agarrar ou segurar uma criatura.",
        reference: "PHB, pg. 195.",
        bullets: [
            "Você pode usar a ação <i>Atacar</i> para fazer um ataque corpo-a-corpo especial, um agarrão. Se você puder realizar múltiplos ataques com a ação <i>Atacar</i>, esse ataque especial substitui um deles.",
            "O alvo da sua tentativa de agarrar deve ser de até uma categoria de tamanho maior que você (no máximo) e deve estar ao seu alcance.",
            "Usando pelo menos uma mão livre, você tenta subjugar o alvo ao realizar um teste de agarrar, um teste de Força (Atletismo) resistido pelo teste de Força (Atletismo) ou de Destreza (Acrobacia) do alvo (o alvo escolhe que habilidade usar)",
            "Se você vencer, o alvo fica sujeito à condição agarrado(o deslocamento da criatura agarrada se torna 0)."
        ]
    },
    {
        title: "Empurrar",
        icon: "hand",
        subtitle: "Ataque corpo-a-corpo especial",
        description: "Empurra uma criatura, derrubando-a ou empurrando-a para longe de você",
        reference: "PHB, pg. 195.",
        bullets: [
            "Realizando a ação <i>Atacar</i>, você pode fazer um ataque corpo-a-corpo especial para empurrar uma criatura. Se você puder fazer múltiplos ataques com a ação Atacar, esse ataque substitui um deles.",
            "O alvo do empurrão deve ser de no máximo uma categoria de tamanho maior que a sua e deve estar ao seu alcance.",
            "Você realiza um teste de Força (Atletismo) resistido pelo teste de Força (Atletismo) ou Destreza (Acrobacia) – o alvo decide que habilidade usar",
            "Se você vencer o teste resistido, você pode derrubar o alvo no chão ou empurrálo 1,5 metros para longe de você."
        ]
    },
    {
        title: "Conjurar uma magia",
        icon: "magic-swirl",
        subtitle: "Tempo de conjuração de 1 ação",
        description: "Conjura uma magia com tempo de conjuração de 1 ação.",
        reference: "PHB, pg. 192.",
        bullets: [
            "Você não pode conjurar uma magia com uma ação bônus e outra magia durante o mesmo turno, exceto se for um truque que tenha tempo de conjuração de 1 ação",
            "O alvo de uma magia deve estar dentro do alcance da magia. Para mirar em um alvo é preciso ter um caminho livre para ele, portanto o alvo não pode estar atrás de uma cobertura total.",
            "Magias com componentes materiais não consomem o material a não ser que explicitamente indicado. A não ser que o casto para o material seja indicado, você pode assumir que o custo é negligienciável e o material é simplesmente encontrado em uma bolsa de componentes.",
            "Algumas magias requerem que você se mantenha concentrado para mantê-las ativas. Se você perder a concentração, a magia se encerra. Você perde a concentração em uma magia se você conjurar outra magia que requer concentração ou se você for incapacitado. Sempre que você sofrer dano enquanto estiver se concentrando em uma magia, você deve fazer um teste de resistência de Constituição para manter sua concentração. A CD é igual a 10 ou metade do dano recebido, o que for maior."
        ]
    },
    {
        title: "Disparada",
        icon: "sprint",
        subtitle: "Dobra a distância de deslocamento",
        description: "Ganhe deslocamento adicional para seu turno atual",
        reference: "PHB, pg. 192.",
        bullets: [
            " O aumento equivale ao seu valor de deslocamento, depois de aplicar qualquer modificador."
        ]
    },
    {
        title: "Desengajar",
        icon: "journey",
        subtitle: "Previne Ataques de Oportunidade",
        description: "Seu movimento não provoca ataques de oportunidade pelo resto do turno",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquivar",
        icon: "aura",
        subtitle: "Aumenta suas defesas",
        description: "Foco total em esquivar ataques.",
        reference: "PHB, pg. 192.",
        bullets: [
            "Até o começo do seu próximo turno, qualquer jogada de ataque contra você éfeita com desvantagem se você puder ver o atacante e você tem vantagem em testes de resistência de Destreza.",
            "Você perde esse benefício se estiver <i>incapacitado</i> ou se seu deslocamento cair para 0."
        ]
    },
    {
        title: "Escapar",
        icon: "manacles",
        subtitle: "Escapar de um agarrão",
        description: "Escapa de um agarrão",
        reference: "PHB, pg. 195.",
        bullets: [
            "Para escapar de um agarrão é preciso ser bem sucedido em um teste de Força (Atletismo) ou Destreza (Acrobacia) resistido pelo teste de Força (Atletismo) de quem iniciou o agarrão.",
            "Escapar de outras condições que te restringem (como algemas) pode requerer um teste de Destreza ou Força, de acordo com a condição em questão."
        ]
    },
    {
        title: "Ajudar",
        icon: "telepathy",
        subtitle: "Concede vantagem a um aliado",
        description: "Concede vantagem em um teste de habilidade ou ataque",
        reference: "PHB, pg. 192.",
        bullets: [
            "Quando realiza a ação Ajudar, a criatura que você ajuda tem vantagem no próximo teste de habilidade que ela fizer para completar a atividade que está recebendo ajuda,",
            "Alternativamente, você pode ajudar uma criatura amigável em um ataque contra uma criatura que está a até 1,5 metro de você.",
            "A vantagem dura até o início do seu próximo turno."
        ]
    },
    {
        title: "Usar objeto",
        icon: "snatch",
        subtitle: "Interagir, usar habilidade especial",
        description: "Interage com um segundo objeto ou usa uma habilidade especial de um objeto",
        reference: "PHB, pg. 193.",
        bullets: [
            "Você pode interagir livremente com um objeto durante seu turno (como sacar uma arma ou abrir uma porta). Caso queira interagir com um segundo objeto, use essa ação.",
            "Quando um objeto requer uma ação para seu uso, você deve tomar essa ação."
        ]
    },
    {
        title: "Usar escudo",
        icon: "round-shield",
        subtitle: "Equipar ou desequipar um escudo",
        description: "Equipa ou desequipa um escudo",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Um escudo sempre toma uma ação para ser equipado ou desequipado.",
            "Armaduras requerem diversos minutos para equipar ou desequipar."
        ]
    },
    {
        title: "Esconder-se",
        icon: "hood",
        subtitle: "",
        description: "Tenta se esconder",
        reference: "PHB, pg. 192.",
        bullets: [
            "Você não pode se esconder de uma criatura que pode te ver. Você deve ter cobertura total, estar em uma área fortemente obscurecida, estar invisível ou bloquear a visão do inimigo de alguma maneira.",
            "Caso você faça algum barulho (como gritar um aviso ou derrubar um vaso), você revela sua posição.",
            "Quando você tenta se esconder, faça um teste de Destreza (Furtividade) e anote o resultado. Até você ser descoberto ou parar de se esconder, esse valor é contestado pelo teste de Sabedoria (Percepção) de qualquer criatura que busque ativamente por sinais de sua presença.",
            "Uma criatura te nota mesmo que não esteja te procurando, a não ser que seu teste de Furtividade seja maior que a Percepção Passiva da criatura.",
            "Você pode usar um teste de Destreza (Furtividade) fora de combate para ações como esconder-se de inimigos, passar despercebido por guardas, escapar sem ser notado ou aproximar-se furtivamente de alguém sem ser visto ou ouvido."
        ]
    },
    {
        title: "Buscar",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Foca sua atenção em encontrar algo",
        reference: "PHB, pg. 193.",
        bullets: [
            "Dependendo da natureza de sua busca, o Mestre pode pedir que você faça um teste de Sabedoria (Percepção) ou Inteligência (Investigação)."
        ]
    },
    {
        title: "Preparar",
        icon: "stopwatch",
        subtitle: "Escolhe um gatilho e uma reação",
        description: "Escolhe um gatilho e uma reação",
        reference: "PHB, pg. 193.",
        bullets: [
            "Primeiro, você decide que circunstância perceptível será o gatilho da sua reação.",
            "Então, você escolhe a ação que irá realizar em resposta àquele gatilho ou escolhe mover o seu deslocamento máximo em resposta ao gatilho.",
            "Quando o gatilho ocorre, você pode tanto realizar sua reação logo depois do gatilho ou pode ignorá-lo.",
            "Quando você prepara uma magia, você conjura a magia normalmente, mas segura a energia que será liberada em sua reação quando o gatilho ocorrer.  Para ser preparada, uma magia deve ter o tempo para conjurar magia igual a 1 ação, e segurar a energia de uma magia exige concentração "
        ]
    },
    {
        title: "Usar uma característica de classe",
        icon: "embrassed-energy",
        subtitle: "Algumas características usam uma ação",
        description: "Usa uma característica racial ou de classe que requer uma ação",
        reference: "Veja a página da classe para mais informações.",
        bullets: [

        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "Qualquer ação que não está nessa lista",
        description: "Realiza qualquer ação que você possa imaginar",
        reference: "PHB, pg. 193.",
        bullets: [
            "Quem descrever uma ação que não está detalhada em alguma lugar nas regras, o Mestre te dirá se a ação é possível e, se necessário, quais testes devem ser realizados para determinar o sucesso ou falha da ação."
        ]
    }
]
