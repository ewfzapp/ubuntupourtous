export type Profile = 'senior' | 'etudiant' | 'victime-virus' | 'decu-windows' | 'curieux';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  intro: string;
  sections: Section[];
  quiz: QuizQuestion[];
  nextLesson?: string;
  prevLesson?: string;
}

export interface Section {
  title: string;
  content: string;
  tip?: string;
  warning?: string;
  steps?: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export const MODULES: Module[] = [
  {
    id: 'philosophie',
    title: 'La philosophie Linux',
    description: 'Comprendre ce qu\'est Linux, pourquoi il existe et pourquoi des millions de personnes l\'utilisent.',
    icon: '🌍',
    color: '#f97316',
    lessons: [
      {
        id: 'ph-01',
        slug: 'cest-quoi-linux',
        title: 'C\'est quoi Linux ?',
        subtitle: 'La grande question, enfin expliquée simplement',
        duration: '8 min',
        icon: '🐧',
        intro: 'Vous avez entendu parler de Linux mais vous ne savez pas exactement ce que c\'est ? C\'est normal — et vous n\'êtes pas seul. Dans ce premier chapitre, on va tout démystifier, sans jargon, sans prise de tête.',
        sections: [
          {
            title: 'Un système d\'exploitation, comme Windows',
            content: 'Votre ordinateur a besoin d\'un chef d\'orchestre pour fonctionner : quelque chose qui gère le clavier, l\'écran, les fichiers, les programmes. Ce chef d\'orchestre, c\'est le système d\'exploitation.\n\nVous connaissez probablement Windows (Microsoft) ou macOS (Apple). Linux est simplement une troisième option — sauf qu\'il est gratuit, libre, et que personne n\'en est propriétaire.',
            tip: 'Un système d\'exploitation, c\'est comme le directeur d\'un hôtel : vous ne le voyez pas travailler, mais sans lui, rien ne fonctionne.',
          },
          {
            title: 'Qui a créé Linux ?',
            content: 'En 1991, un étudiant finlandais de 21 ans nommé Linus Torvalds était frustré par les systèmes existants. Il a décidé d\'en créer un lui-même — pour le plaisir — et de le partager gratuitement avec tout le monde.\n\nDepuis, des milliers de développeurs du monde entier ont contribué à l\'améliorer. Aujourd\'hui, Linux fait tourner 96% des serveurs d\'internet, tous les smartphones Android, la Station spatiale internationale, et des centaines de millions d\'ordinateurs.',
          },
          {
            title: 'Ubuntu : Linux pour tout le monde',
            content: 'Il existe des dizaines de versions de Linux, appelées "distributions". Ubuntu est la plus populaire pour les débutants — elle est pensée pour être simple, belle et accessible.\n\nLe mot "Ubuntu" vient du zoulou et signifie "Je suis ce que je suis grâce à ce que nous sommes tous" — une belle philosophie pour un logiciel communautaire.',
            tip: 'Ubuntu est à Linux ce que Chrome est à internet : la porte d\'entrée la plus facile et la plus accueillante.',
          },
        ],
        quiz: [
          {
            id: 'ph01-q1',
            question: 'Qu\'est-ce qu\'un système d\'exploitation ?',
            options: [
              'Un logiciel pour naviguer sur internet',
              'Le chef d\'orchestre qui gère tout votre ordinateur',
              'Un antivirus',
              'Une application pour écrire des documents',
            ],
            correct: 1,
            explanation: 'Le système d\'exploitation (Windows, macOS, Linux) gère tout le fonctionnement de votre ordinateur : le clavier, l\'écran, les fichiers, les programmes.',
          },
          {
            id: 'ph01-q2',
            question: 'Qui a créé Linux ?',
            options: [
              'Bill Gates, le fondateur de Microsoft',
              'Steve Jobs, le fondateur d\'Apple',
              'Linus Torvalds, un étudiant finlandais',
              'Google',
            ],
            correct: 2,
            explanation: 'Linus Torvalds a créé Linux en 1991 alors qu\'il était étudiant en Finlande. Il avait 21 ans.',
          },
          {
            id: 'ph01-q3',
            question: 'Que signifie "Ubuntu" en zoulou ?',
            options: [
              'Ordinateur gratuit',
              'Système rapide',
              'Je suis ce que je suis grâce à ce que nous sommes tous',
              'Pingouin africain',
            ],
            correct: 2,
            explanation: '"Ubuntu" est un mot zoulou qui exprime la solidarité et l\'humanité partagée — parfaitement en accord avec la philosophie du logiciel libre.',
          },
        ],
        nextLesson: 'pourquoi-changer',
      },
      {
        id: 'ph-02',
        slug: 'pourquoi-changer',
        title: 'Pourquoi changer ?',
        subtitle: 'Les vraies raisons de passer à Ubuntu',
        duration: '10 min',
        icon: '🤔',
        intro: 'Votre ordinateur rame, Windows vous demande de payer pour une mise à jour, vous avez chopé un virus, ou vous en avez simplement assez. Voici pourquoi Ubuntu pourrait changer votre vie numérique.',
        sections: [
          {
            title: 'C\'est gratuit — vraiment gratuit',
            content: 'Ubuntu est gratuit à télécharger, gratuit à installer, et gratuit à utiliser sans limite de temps. Pas de licence à renouveler, pas d\'abonnement, pas de version "pro" cachée derrière un paywall.\n\nLa suite bureautique LibreOffice (l\'équivalent de Word, Excel, PowerPoint) est incluse gratuitement. Le lecteur PDF, le lecteur vidéo, le gestionnaire de photos — tout est là, dès l\'installation.',
            tip: 'Une licence Windows 11 coûte entre 145€ et 200€. Ubuntu coûte 0€. Pour toujours.',
          },
          {
            title: 'Les virus ? Presque inexistants',
            content: 'Linux est nativement bien plus résistant aux virus que Windows. Pourquoi ? Parce que sa conception même rend difficile l\'exécution d\'un programme malveillant sans votre autorisation explicite.\n\nLes auteurs de virus ciblent Windows car c\'est là que se trouvent 90% des victimes potentielles. Sur Linux, vous êtes une cible bien moins attractive.',
            tip: 'Sur Ubuntu, vous n\'avez pas besoin d\'antivirus. Le système lui-même est votre meilleure protection.',
          },
          {
            title: 'Ça redonne vie aux vieux PC',
            content: 'Votre ordinateur rame sous Windows 10 ou 11 ? Ubuntu peut le ressusciter. Il consomme bien moins de ressources, démarre plus vite, et tourne parfaitement sur des machines qui auraient du mal avec les dernières versions de Windows.\n\nUn PC de 2012 avec 4 Go de RAM peut fonctionner parfaitement sous Ubuntu — là où Windows 11 refuserait même de s\'installer.',
            warning: 'Windows 10 arrive en fin de support en octobre 2025. Microsoft voudra vous vendre Windows 11. Avec Ubuntu, cette question ne se pose plus jamais.',
          },
          {
            title: 'Votre vie privée vous appartient',
            content: 'Windows collecte énormément de données sur votre utilisation : ce que vous tapez, vos habitudes, vos fichiers. Ubuntu ne fait rien de tel. Canonical (l\'entreprise derrière Ubuntu) a un modèle économique basé sur les services aux entreprises — pas sur la revente de vos données.',
          },
        ],
        quiz: [
          {
            id: 'ph02-q1',
            question: 'Combien coûte Ubuntu ?',
            options: [
              '9,99€ / mois',
              '145€ (licence unique)',
              '0€ — totalement gratuit',
              'Gratuit la première année, puis payant',
            ],
            correct: 2,
            explanation: 'Ubuntu est totalement gratuit, pour toujours. Pas d\'abonnement, pas de licence, pas de version payante cachée.',
          },
          {
            id: 'ph02-q2',
            question: 'Pourquoi y a-t-il moins de virus sous Linux ?',
            options: [
              'Linux a le meilleur antivirus du monde',
              'Sa conception rend difficile l\'exécution de programmes malveillants, et les hackers ciblent prioritairement Windows',
              'Linux est trop vieux pour être attaqué',
              'Linux n\'est pas connecté à internet',
            ],
            correct: 1,
            explanation: 'La conception de Linux rend difficile l\'exécution non autorisée de programmes. De plus, les auteurs de virus ciblent Windows car c\'est là que se trouvent 90% des victimes potentielles.',
          },
        ],
        prevLesson: 'cest-quoi-linux',
        nextLesson: 'dedramatiser',
      },
    ],
  },
  {
    id: 'decouverte',
    title: 'Découverte sans risque',
    description: 'Tester Ubuntu sans toucher à votre Windows. Zéro risque, zéro installation.',
    icon: '🔬',
    color: '#22c55e',
    lessons: [
      {
        id: 'dc-01',
        slug: 'dedramatiser',
        title: 'Dédramatiser',
        subtitle: 'Non, vous n\'allez pas casser votre ordinateur',
        duration: '5 min',
        icon: '😌',
        intro: 'La première peur de tout le monde : "Et si je casse mon ordinateur ?" Spoiler : vous ne casserez rien. On va voir pourquoi, et comment tester Ubuntu en toute sécurité.',
        sections: [
          {
            title: 'Le live USB : votre bouclier',
            content: 'Ubuntu peut fonctionner directement depuis une clé USB, sans jamais toucher à votre disque dur. C\'est ce qu\'on appelle le "mode live".\n\nVous démarrez sur la clé, vous utilisez Ubuntu, vous testez, vous explorez — et quand vous éteignez, votre Windows est exactement là où vous l\'avez laissé. Rien n\'a changé.',
            tip: 'C\'est comme essayer une voiture dans un parking : vous ne vous engagez à rien, et vous pouvez rendre les clés à tout moment.',
          },
          {
            title: 'Ce que vous pouvez faire en mode live',
            content: 'En mode live, vous pouvez vraiment tout tester :\n• Naviguer sur internet avec Firefox\n• Écrire des documents avec LibreOffice\n• Écouter de la musique, regarder des vidéos\n• Explorer le bureau et les paramètres\n• Tester si votre Wi-Fi, votre imprimante et votre webcam fonctionnent\n\nSeule limite : ce que vous créez ou téléchargez disparaît quand vous éteignez (puisque rien n\'est sauvegardé sur votre disque).',
          },
          {
            title: 'De quoi avez-vous besoin ?',
            content: 'Pour tester Ubuntu en live, il vous faut :\n• Une clé USB de 8 Go minimum (environ 5€)\n• Une connexion internet pour télécharger Ubuntu\n• 30 minutes de temps\n\nC\'est tout. Pas besoin de toucher à votre ordinateur, pas besoin de désinstaller quoi que ce soit.',
            tip: 'Vous avez probablement déjà une vieille clé USB qui traîne dans un tiroir. Vérifiez qu\'elle fait au moins 8 Go.',
          },
        ],
        quiz: [
          {
            id: 'dc01-q1',
            question: 'Qu\'est-ce que le "mode live" d\'Ubuntu ?',
            options: [
              'Une version payante d\'Ubuntu',
              'Ubuntu qui fonctionne depuis une clé USB sans toucher au disque dur',
              'Un mode de connexion internet',
              'Un mode pour les développeurs seulement',
            ],
            correct: 1,
            explanation: 'Le mode live permet de démarrer et utiliser Ubuntu directement depuis une clé USB, sans installer quoi que ce soit sur votre disque dur. Votre Windows reste intact.',
          },
          {
            id: 'dc01-q2',
            question: 'Quelle taille minimale doit faire la clé USB pour Ubuntu ?',
            options: ['2 Go', '4 Go', '8 Go', '32 Go'],
            correct: 2,
            explanation: 'Il faut une clé USB d\'au moins 8 Go pour créer une clé bootable Ubuntu. Les clés de 16 Go ou 32 Go fonctionnent aussi très bien.',
          },
        ],
        prevLesson: 'pourquoi-changer',
        nextLesson: 'creer-cle-usb',
      },
      {
        id: 'dc-02',
        slug: 'creer-cle-usb',
        title: 'Créer sa clé USB Ubuntu',
        subtitle: 'Étape par étape, capture par capture',
        duration: '15 min',
        icon: '💾',
        intro: 'On passe à la pratique. Dans ce chapitre, on va télécharger Ubuntu et créer votre clé USB de démarrage. Suivez chaque étape dans l\'ordre — c\'est plus simple que vous ne le pensez.',
        sections: [
          {
            title: 'Étape 1 : Télécharger Ubuntu',
            content: 'Rendez-vous sur ubuntu.com/download/desktop et téléchargez la dernière version LTS (Long Term Support). Le fichier pèse environ 5 Go — prévoyez 30 à 60 minutes selon votre connexion.\n\nLa version LTS est la plus stable et bénéficie de mises à jour de sécurité pendant 5 ans. C\'est celle recommandée pour tous les débutants.',
            tip: 'LTS signifie "Long Term Support" — c\'est la version la plus stable, mise à jour pendant 5 ans. Toujours choisir LTS quand on débute.',
            steps: [
              'Allez sur ubuntu.com/download/desktop',
              'Cliquez sur "Download XX.XX LTS"',
              'Attendez la fin du téléchargement (fichier .iso)',
              'Ne double-cliquez PAS sur le fichier — on va l\'utiliser autrement',
            ],
          },
          {
            title: 'Étape 2 : Installer Balena Etcher',
            content: 'Pour créer la clé USB, on utilise un logiciel gratuit appelé Balena Etcher. Il est disponible pour Windows et Mac, et il rend l\'opération très simple.\n\nTéléchargez-le sur balena.io/etcher — choisissez la version correspondant à votre système actuel (Windows ou Mac).',
            steps: [
              'Allez sur balena.io/etcher',
              'Cliquez sur "Download for Windows" (ou Mac)',
              'Installez le logiciel normalement',
              'Branchez votre clé USB (ATTENTION : tout son contenu sera effacé !)',
            ],
            warning: 'Tout le contenu de votre clé USB sera effacé. Faites une sauvegarde si elle contient des fichiers importants.',
          },
          {
            title: 'Étape 3 : Créer la clé avec Etcher',
            content: 'Etcher est conçu pour être ultra simple — il n\'y a que 3 clics à faire.',
            steps: [
              'Ouvrez Balena Etcher',
              'Cliquez "Flash from file" → sélectionnez le fichier ubuntu-XX.XX.iso téléchargé',
              'Cliquez "Select target" → choisissez votre clé USB',
              'Cliquez "Flash!" et attendez (5 à 10 minutes)',
              'Quand c\'est terminé, votre clé est prête !',
            ],
            tip: 'Etcher vérifie automatiquement que la clé a bien été créée correctement. Si vous voyez "Flash Complete!", tout est parfait.',
          },
        ],
        quiz: [
          {
            id: 'dc02-q1',
            question: 'Que signifie "LTS" dans "Ubuntu LTS" ?',
            options: [
              'Linux Total System',
              'Long Term Support — version stable sur 5 ans',
              'Latest Technology Software',
              'Light Turbo Speed',
            ],
            correct: 1,
            explanation: 'LTS signifie "Long Term Support". C\'est la version d\'Ubuntu qui reçoit des mises à jour de sécurité pendant 5 ans. C\'est toujours la version recommandée pour les débutants.',
          },
          {
            id: 'dc02-q2',
            question: 'Quel logiciel utilise-t-on pour créer la clé USB Ubuntu ?',
            options: ['WinZip', 'Balena Etcher', 'VLC', 'Adobe Reader'],
            correct: 1,
            explanation: 'Balena Etcher est le logiciel recommandé pour créer une clé USB bootable Ubuntu. Il est gratuit, simple, et disponible pour Windows et Mac.',
          },
          {
            id: 'dc02-q3',
            question: 'Que faut-il faire avant de créer la clé USB avec Etcher ?',
            options: [
              'Formater votre disque dur',
              'Désinstaller Windows',
              'Sauvegarder le contenu de la clé USB car il sera effacé',
              'Activer le Bluetooth',
            ],
            correct: 2,
            explanation: 'Etcher efface tout le contenu de la clé USB pour y installer Ubuntu. Pensez à sauvegarder vos fichiers importants avant.',
          },
        ],
        prevLesson: 'dedramatiser',
        nextLesson: 'demarrer-live',
      },
    ],
  },
  {
    id: 'installation',
    title: 'Installation',
    description: 'Installer Ubuntu seul ou avec Windows (dual boot). Guide complet pas à pas.',
    icon: '⚙️',
    color: '#6366f1',
    lessons: [
      {
        id: 'in-01',
        slug: 'demarrer-live',
        title: 'Démarrer sur la clé USB',
        subtitle: 'Votre première rencontre avec Ubuntu',
        duration: '12 min',
        icon: '🚀',
        intro: 'Votre clé USB est prête. Maintenant, on va démarrer l\'ordinateur dessus pour découvrir Ubuntu pour la première fois — sans rien installer.',
        sections: [
          {
            title: 'Le démarrage : entrer dans le BIOS/UEFI',
            content: 'Quand vous allumez votre ordinateur, il cherche par défaut à démarrer sur votre disque dur (là où Windows est installé). Pour démarrer sur la clé USB, vous devez lui dire de regarder ailleurs.\n\nPour ça, il faut appuyer sur une touche spéciale au tout début du démarrage — avant même que Windows n\'apparaisse.',
            tip: 'La touche à appuyer dépend de votre marque : F12 (Dell, Lenovo), F9 (HP), F8 ou Échap (Asus). Regardez l\'écran noir au démarrage — la touche est souvent indiquée en bas.',
            steps: [
              'Branchez la clé USB Ubuntu sur votre ordinateur',
              'Éteignez complètement l\'ordinateur (pas de veille)',
              'Rallumez-le et appuyez immédiatement sur F12 (ou la touche de votre marque)',
              'Un menu apparaît — choisissez votre clé USB dans la liste',
              'Appuyez sur Entrée',
            ],
          },
          {
            title: 'Bienvenue dans Ubuntu !',
            content: 'Après quelques secondes, le bureau Ubuntu apparaît. Vous y êtes ! Vous utilisez Ubuntu sans avoir rien installé.\n\nPrenez le temps d\'explorer : le bureau, le menu des applications, les paramètres. Testez Firefox, ouvrez LibreOffice, connectez-vous à votre Wi-Fi.\n\nC\'est exactement ce que vous aurez si vous installez Ubuntu — en plus rapide, car votre disque dur est plus rapide qu\'une clé USB.',
            tip: 'Si l\'ordinateur démarre sur Windows comme d\'habitude, réessayez en appuyant plus tôt et plus fermement sur la touche du menu de démarrage.',
          },
        ],
        quiz: [
          {
            id: 'in01-q1',
            question: 'Pourquoi faut-il appuyer sur F12 (ou une autre touche) au démarrage ?',
            options: [
              'Pour activer Ubuntu',
              'Pour dire à l\'ordinateur de démarrer sur la clé USB plutôt que sur le disque dur',
              'Pour effacer Windows',
              'Pour accélérer le démarrage',
            ],
            correct: 1,
            explanation: 'Par défaut, l\'ordinateur démarre sur le disque dur (Windows). Appuyer sur F12 ouvre le menu de sélection du périphérique de démarrage, ce qui permet de choisir la clé USB.',
          },
        ],
        prevLesson: 'creer-cle-usb',
        nextLesson: 'dual-boot',
      },
      {
        id: 'in-02',
        slug: 'dual-boot',
        title: 'Le dual boot',
        subtitle: 'Ubuntu ET Windows sur le même PC',
        duration: '20 min',
        icon: '🔀',
        intro: 'Vous avez testé Ubuntu et vous l\'aimez bien — mais vous n\'êtes pas encore prêt à abandonner Windows complètement. Bonne nouvelle : vous pouvez garder les deux !',
        sections: [
          {
            title: 'C\'est quoi le dual boot ?',
            content: 'Le dual boot consiste à installer Ubuntu sur votre disque dur à côté de Windows. Au démarrage, un menu apparaît et vous demande lequel vous voulez utiliser ce jour-là.\n\nC\'est la solution idéale pour les gens qui veulent migrer progressivement — on garde Windows "au cas où" et on utilise Ubuntu de plus en plus.',
            tip: 'La plupart des gens qui font le dual boot finissent par démarrer Ubuntu 90% du temps et oublient que Windows est là.',
          },
          {
            title: 'Avant de commencer : sauvegardez !',
            content: 'Avant toute installation, une règle absolue : sauvegardez vos données importantes.\n\nCopiez vos documents, photos, vidéos sur un disque externe ou un service cloud (Google Drive, OneDrive). Pas parce que ça va forcément mal se passer — mais parce qu\'une sauvegarde est toujours une bonne idée.',
            warning: 'NE SAUTEZ PAS cette étape. Même si l\'installation se passe à 99,9% sans problème, la sauvegarde préalable est une règle de base en informatique.',
            steps: [
              'Copiez vos documents importants sur un disque externe',
              'Vérifiez que vous avez bien accès à vos photos',
              'Notez vos mots de passe importants',
              'Seulement ensuite, passez à l\'installation',
            ],
          },
          {
            title: 'L\'installation en 6 étapes',
            content: 'Démarrez sur votre clé USB Ubuntu (comme appris dans le chapitre précédent), puis cliquez sur "Installer Ubuntu".',
            steps: [
              'Choisissez votre langue : Français',
              'Choisissez votre clavier : French (ou French - Azerty)',
              'Type d\'installation : choisissez "Installer Ubuntu à côté de Windows" ← IMPORTANT',
              'Ajustez la taille des partitions avec le curseur (recommandé : 50% pour chaque)',
              'Choisissez votre fuseau horaire : Paris',
              'Créez votre compte (nom, nom d\'utilisateur, mot de passe)',
              'Cliquez "Installer" et attendez 15-20 minutes',
            ],
            tip: 'L\'option "Installer Ubuntu à côté de Windows" est la clé. Ubuntu s\'occupe automatiquement de redimensionner la partition Windows pour faire de la place.',
          },
        ],
        quiz: [
          {
            id: 'in02-q1',
            question: 'Qu\'est-ce que le dual boot ?',
            options: [
              'Un ordinateur avec deux écrans',
              'Ubuntu et Windows installés sur le même PC, avec un menu de choix au démarrage',
              'Démarrer l\'ordinateur deux fois de suite',
              'Un type de clé USB spéciale',
            ],
            correct: 1,
            explanation: 'Le dual boot permet d\'avoir Ubuntu et Windows sur le même disque dur. Un menu apparaît à chaque démarrage pour choisir lequel utiliser.',
          },
          {
            id: 'in02-q2',
            question: 'Quelle est la première chose à faire AVANT d\'installer Ubuntu en dual boot ?',
            options: [
              'Désinstaller tous ses programmes Windows',
              'Acheter un nouveau disque dur',
              'Sauvegarder ses données importantes',
              'Appeler son fournisseur internet',
            ],
            correct: 2,
            explanation: 'Avant toute installation, sauvegardez vos données importantes sur un disque externe ou dans le cloud. C\'est une règle absolue en informatique.',
          },
        ],
        prevLesson: 'demarrer-live',
        nextLesson: 'premiers-pas',
      },
    ],
  },
  {
    id: 'vie-quotidienne',
    title: 'Vie quotidienne',
    description: 'Naviguer, écrire, écouter, imprimer — tout ce que vous faites tous les jours sous Ubuntu.',
    icon: '☀️',
    color: '#eab308',
    lessons: [
      {
        id: 'vq-01',
        slug: 'premiers-pas',
        title: 'Premiers pas sur le bureau',
        subtitle: 'Repères et découvertes',
        duration: '10 min',
        icon: '🖥️',
        intro: 'Ubuntu est installé et vous êtes sur le bureau. Bienvenue chez vous ! On va découvrir ensemble les repères essentiels pour vous sentir à l\'aise.',
        sections: [
          {
            title: 'Le bureau Ubuntu (GNOME)',
            content: 'Le bureau d\'Ubuntu s\'appelle GNOME. Il est conçu pour être épuré et efficace.\n\nEn haut : la barre de statut (heure, Wi-Fi, volume, compte).\nEn bas (ou à gauche selon la version) : le dock avec vos applications favorites.\nAu centre : votre espace de travail, vide et propre.',
            tip: 'Appuyez sur la touche "Super" (la touche Windows de votre clavier) pour ouvrir la vue d\'ensemble — vous verrez toutes vos applications ouvertes et pourrez en lancer de nouvelles.',
          },
          {
            title: 'Trouver ses applications',
            content: 'Cliquez sur les 9 points en bas du dock (ou appuyez sur Super) pour voir toutes vos applications installées.\n\nVous y trouverez Firefox pour naviguer, LibreOffice Writer pour écrire, Rhythmbox pour la musique, Shotwell pour les photos, et bien d\'autres.',
          },
          {
            title: 'Les équivalents de vos logiciels habituels',
            content: 'Vous avez l\'habitude de Windows ? Voici les équivalents Ubuntu :\n\n• Word → LibreOffice Writer\n• Excel → LibreOffice Calc\n• PowerPoint → LibreOffice Impress\n• Internet Explorer/Edge → Firefox (ou installez Chrome)\n• Windows Media Player → Rhythmbox ou VLC\n• Paint → GIMP (bien plus puissant)\n• Explorateur de fichiers → Nautilus (Fichiers)',
            tip: 'LibreOffice ouvre et enregistre parfaitement les fichiers Word, Excel et PowerPoint. Vos documents restent compatibles avec vos collègues sous Windows.',
          },
        ],
        quiz: [
          {
            id: 'vq01-q1',
            question: 'Comment s\'appelle le bureau d\'Ubuntu ?',
            options: ['Finder', 'Explorer', 'GNOME', 'Unity'],
            correct: 2,
            explanation: 'Le bureau d\'Ubuntu s\'appelle GNOME. C\'est l\'environnement de bureau par défaut d\'Ubuntu depuis plusieurs années.',
          },
          {
            id: 'vq01-q2',
            question: 'Quel logiciel Ubuntu remplace Microsoft Word ?',
            options: ['OpenOffice', 'LibreOffice Writer', 'Google Docs', 'Notepad'],
            correct: 1,
            explanation: 'LibreOffice Writer est l\'équivalent de Microsoft Word sous Ubuntu. Il est gratuit, puissant et compatible avec les fichiers .docx.',
          },
        ],
        prevLesson: 'dual-boot',
        nextLesson: 'installer-applications',
      },
      {
        id: 'vq-02',
        slug: 'installer-applications',
        title: 'Installer des applications',
        subtitle: 'La logithèque Ubuntu : votre magasin gratuit',
        duration: '12 min',
        icon: '📦',
        intro: 'Sous Ubuntu, installer une application ne veut pas dire aller sur un site internet hasardeux et télécharger un .exe. Il y a bien mieux : la Logithèque Ubuntu, votre magasin officiel de logiciels gratuits et sécurisés.',
        sections: [
          {
            title: 'La Logithèque Ubuntu',
            content: 'La Logithèque (Ubuntu Software) est l\'équivalent de l\'App Store d\'Apple ou du Google Play Store, mais pour votre ordinateur — et tout est gratuit.\n\nCherchez un logiciel, cliquez sur "Installer", entrez votre mot de passe, et c\'est fait. Pas de pub, pas de barre d\'outils indésirable, pas de virus.',
            tip: 'VLC, GIMP, Inkscape, Audacity, Steam, Spotify — ils sont tous dans la Logithèque, en un clic.',
          },
          {
            title: 'Les Snap et les Flatpak',
            content: 'Vous entendrez parfois parler de "Snap" ou "Flatpak". Ce sont deux formats modernes de paquets logiciels qui s\'installent facilement et de façon sécurisée.\n\nPas besoin de comprendre la différence pour l\'instant — la Logithèque gère tout ça automatiquement pour vous.',
          },
          {
            title: 'Installer via le terminal (quand il le faut)',
            content: 'Parfois, un tutoriel vous demandera d\'utiliser le Terminal. Pas de panique — c\'est juste une fenêtre texte où on tape des commandes.\n\nLa commande magique : sudo apt install nom-du-logiciel\n\nExemple : sudo apt install vlc installe VLC en quelques secondes.',
            tip: 'Le Terminal fait peur au début, mais une seule commande suffit pour 90% des installations. Vous n\'êtes pas obligé de l\'utiliser — la Logithèque fait très bien le travail.',
            steps: [
              'Ouvrez le Terminal (cherchez "Terminal" dans vos applications)',
              'Tapez : sudo apt install vlc',
              'Appuyez sur Entrée',
              'Entrez votre mot de passe (il ne s\'affiche pas — c\'est normal)',
              'Tapez Y et Entrée pour confirmer',
              'VLC est installé !',
            ],
          },
        ],
        quiz: [
          {
            id: 'vq02-q1',
            question: 'Comment installer une application sous Ubuntu de façon simple et sécurisée ?',
            options: [
              'Télécharger un .exe sur internet',
              'Via la Logithèque Ubuntu (Ubuntu Software)',
              'Appeler le service technique',
              'Acheter un CD',
            ],
            correct: 1,
            explanation: 'La Logithèque Ubuntu est le moyen le plus simple et sécurisé d\'installer des applications. Tous les logiciels y sont vérifiés et gratuits.',
          },
          {
            id: 'vq02-q2',
            question: 'Que fait la commande "sudo apt install vlc" dans le Terminal ?',
            options: [
              'Elle supprime VLC',
              'Elle met à jour Ubuntu',
              'Elle installe le logiciel VLC',
              'Elle redémarre l\'ordinateur',
            ],
            correct: 2,
            explanation: '"sudo apt install" est la commande d\'installation sous Ubuntu. "vlc" est le nom du logiciel à installer. Simple et efficace !',
          },
        ],
        prevLesson: 'premiers-pas',
      },
    ],
  },
];

export function getAllLessons(): Lesson[] {
  return MODULES.flatMap(m => m.lessons);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return getAllLessons().find(l => l.slug === slug);
}

export function getModuleForLesson(slug: string): Module | undefined {
  return MODULES.find(m => m.lessons.some(l => l.slug === slug));
}
