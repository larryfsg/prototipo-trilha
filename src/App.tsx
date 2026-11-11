import { FormEvent, ReactNode, useState } from "react"

type Role = "aluno" | "professor"
type Screen = "mural" | "perfil" | "materiais"
type TeacherScreen = "mural" | "materiais" | "frequencia" | "redacoes"
type IconName = "home" | "user" | "book" | "arrow" | "clock" | "pin" | "download" | "chevron" | "file" | "check" | "x" | "eye" | "eyeOff" | "plus" | "edit" | "trash"

type Notice = {
  id: number
  type: string
  title: string
  text: string
  author: string
  time: string
  color: string
  active: boolean
}

type Essay = {
  id: number
  student: string
  title: string
  date: string
  score: string
  feedback: string
  status: "Pendente" | "Corrigida"
}

type PublishedMaterial = {
  id: number
  title: string
  description: string
  subject: string
  week: string
  file: string
}

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9M9 20v-6h6v6" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c.7-4.2 3.3-6 8-6s7.3 1.8 8 6" />
      </>
    ),
    book: (
      <>
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H11v18H6.5A2.5 2.5 0 0 0 4 22V4.5Z" />
        <path d="M20 4.5A2.5 2.5 0 0 0 17.5 2H13v18h4.5a2.5 2.5 0 0 1 2.5 2V4.5Z" />
      </>
    ),
    arrow: (
      <>
        <path d="m15 18-6-6 6-6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="m8 3 8 3-2 5 4 3-5 1-3 6-1-7-4-3 5-2-2-6Z" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m0 0 5-5m-5 5-5-5M4 20h16" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    file: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h5M9 12h6M9 16h6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    x: <path d="M18 6 6 18M6 6l12 12" />,
    plus: <path d="M12 5v14M5 12h14" />,
    edit: (
      <>
        <path d="m4 20 4.2-1 10.5-10.5a2.1 2.1 0 0 0-3-3L5.2 16 4 20Z" />
        <path d="m14 7 3 3" />
      </>
    ),
    trash: (
      <>
        <path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    eyeOff: (
      <>
        <path d="m3 3 18 18M10.6 6.2A10 10 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-2.1 2.8M6.7 6.7C3.6 8.4 2 12 2 12s3.5 6 10 6c1 0 2-.2 2.8-.4" />
      </>
    ),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`logo ${light ? "logo-light" : ""}`} aria-label="Trilha">
      <svg viewBox="0 0 90 66" aria-hidden="true">
        <g className="logo-book">
          <path d="M44 56C34 46 24 43 10 43V10c14 0 25 4 34 14v32Z" />
          <path d="M10 16H5v34c14 0 27 1 39 8" />
          <path d="M18 11V4c10 1 19 5 26 13" />
        </g>
        <g className="logo-trail">
          <path d="M46 24c10-11 20-16 35-16l-10 7 11 3-18 6 13 7-20 3 17 10H49" />
          <path d="M44 24v32c10-9 19-12 30-12" />
        </g>
        <circle cx="44" cy="56" r="4" />
      </svg>
      <span>trilha</span>
    </div>
  )
}

function Login({ onLogin }: { onLogin: (role: Role) => void }) {
  const [role, setRole] = useState<Role>("aluno")
  const [mode, setMode] = useState<"login" | "conta">("login")
  const [showPassword, setShowPassword] = useState(false)

  function submit(event: FormEvent) {
    event.preventDefault()
    onLogin(role)
  }

  return (
    <main className="auth-shell">
      <section className="auth-brand">
        <Logo light />
        <div>
          <p className="eyebrow light">Seu cursinho, no seu ritmo</p>
          <h1>Um caminho mais simples para chegar mais longe.</h1>
          <p>Materiais, avisos e seu progresso reunidos em um só lugar.</p>
        </div>
        <div className="brand-path" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="auth-panel">
        <div className="auth-inner">
          <div className="mobile-logo">
            <Logo />
          </div>
          <div className="role-switch" aria-label="Tipo de acesso">
            <button
              type="button"
              className={role === "aluno" ? "selected" : ""}
              onClick={() => setRole("aluno")}
            >
              Sou aluno
            </button>
            <button
              type="button"
              className={role === "professor" ? "selected" : ""}
              onClick={() => setRole("professor")}
            >
              Sou professor
            </button>
          </div>

          {mode === "conta" && (
            <div className="auth-heading">
              <p className="eyebrow"></p>
              <h2>Crie sua conta</h2>
              <p>&nbsp;</p>
            </div>
          )}

          <form onSubmit={submit}>
            {mode === "conta" && (
              <label>
                Nome completo
                <input
                  type="text"
                  placeholder="Como podemos te chamar?"
                  required
                />
              </label>
            )}
            <label>
              E-mail
              <input type="email" placeholder="voce@email.com" required />
            </label>
            <label>
              Senha
              <span className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  required
                  minLength={4}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Exibir ou ocultar senha"
                >
                  <Icon name={showPassword ? "eyeOff" : "eye"} size={20} />
                </button>
              </span>
            </label>
            {mode === "login" && (
              <button type="button" className="forgot">
                Esqueci minha senha
              </button>
            )}
            <button className="primary-button" type="submit">
              {mode === "login" ? "Entrar na plataforma" : "Criar minha conta"}
              <span>→</span>
            </button>
          </form>

          <p className="auth-toggle">
            {mode === "login"
              ? ""
              : "Já tem uma conta?"}
            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "conta" : "login")}
            >
              {mode === "login" ? "Criar conta" : "Fazer login"}
            </button>
          </p>
        </div>
      </section>
    </main>
  )
}

const initialNotices: Notice[] = [
  {
    id: 1,
    type: "Importante",
    title: "Simulado geral neste sábado",
    text: "O simulado começa às 8h e terá duração de 5 horas. Não esqueça documento e caneta preta.",
    author: "Coordenação",
    time: "Hoje, 10:30",
    color: "orange",
    active: true,
  },
  {
    id: 2,
    type: "Atividade",
    title: "Lista de exercícios de Trigonometria",
    text: "A nova lista já está disponível em Materiais. A correção será feita na próxima aula.",
    author: "Prof. Rafael",
    time: "Ontem, 18:45",
    color: "blue",
    active: true,
  },
  {
    id: 3,
    type: "Aviso",
    title: "Mudança de sala",
    text: "A aula de História desta quinta-feira acontecerá na sala 04.",
    author: "Profª. Lúcia",
    time: "12 jun, 14:20",
    color: "green",
    active: true,
  },
]

function Mural({ notices }: { notices: Notice[] }) {
  return (
    <>
      <header className="top-header">
        <div className="header-spacer" />
        <button className="avatar" aria-label="Abrir perfil">
          MS
        </button>
      </header>
      <section className="weekly-essay">
        <div className="essay-label">
          <span>
            <Icon name="pin" size={16} />
          </span>{" "}
          Redação da semana
        </div>
        <h2>Os desafios da inclusão digital no Brasil</h2>
        <div className="deadline">
          <Icon name="clock" size={18} />
          <span>
            Entrega até <strong>domingo, 23:59</strong>
          </span>
          <b>3 dias</b>
        </div>
      </section>
      <section className="content-section">
        <div className="section-title">
          <div>
            <h2>Avisos</h2>
          </div>
          
        </div>
        <div className="notice-list">
          {notices.map((notice) => (
            <article className="notice-card" key={notice.title}>
              <div className={`notice-marker ${notice.color}`} />
              <div className="notice-content">
                <span className={`notice-type ${notice.color}`}>
                  {notice.type}
                </span>
                <h3>{notice.title}</h3>
                <p>{notice.text}</p>
                <footer>
                  <span>{notice.author}</span>
                  <time>{notice.time}</time>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

const initialEssays: Essay[] = [
  {
    id: 1,
    student: "Mariana Souza",
    title: "Caminhos para combater a evasão escolar",
    date: "08 de junho de 2025",
    score: "880",
    feedback:
      "Ótima construção argumentativa, com repertório sociocultural pertinente e bem relacionado à tese. A progressão entre os parágrafos está clara e a proposta de intervenção apresenta agente, ação e finalidade. Para avançar ainda mais, trabalhe a variedade de conectivos no terceiro parágrafo e revise duas ocorrências de repetição lexical.",
    status: "Corrigida",
  },
  {
    id: 2,
    student: "Mariana Souza",
    title: "O impacto das redes sociais na saúde mental",
    date: "25 de maio de 2025",
    score: "840",
    feedback:
      "Seu texto apresenta uma tese clara desde a introdução e desenvolve bons argumentos sobre pressão estética e uso excessivo das plataformas. O repertório foi produtivo, mas poderia ser retomado de forma mais explícita no desenvolvimento. Na proposta de intervenção, detalhe melhor o agente responsável, o meio de execução e o efeito esperado.",
    status: "Corrigida",
  },
  {
    id: 3,
    student: "Mariana Souza",
    title: "Desafios do acesso à cultura no Brasil",
    date: "11 de maio de 2025",
    score: "920",
    feedback:
      "Excelente progressão de ideias, domínio da norma padrão e escolha cuidadosa de exemplos. Os parágrafos possuem tópicos frasais bem definidos e a conclusão retoma a tese com consistência. Como refinamento, você pode tornar o segundo argumento mais específico, incluindo um dado ou referência histórica que fortaleça a análise.",
    status: "Corrigida",
  },
  {
    id: 4,
    student: "Lucas Almeida",
    title: "Caminhos para combater a evasão escolar",
    date: "08 de junho de 2025",
    score: "",
    feedback: "",
    status: "Pendente",
  },
  {
    id: 5,
    student: "Ana Clara Ribeiro",
    title: "Caminhos para combater a evasão escolar",
    date: "08 de junho de 2025",
    score: "",
    feedback: "",
    status: "Pendente",
  },
]

function Profile({ essays }: { essays: Essay[] }) {
  const [openEssay, setOpenEssay] = useState(0)
  const studentEssays = essays.filter(
    (essay) =>
      essay.student === "Mariana Souza" && essay.status === "Corrigida",
  )
  return (
    <>
      <header className="simple-header">
        <h1>Meu perfil</h1>
      </header>
      <section className="attendance-card">
        <div
          className="progress-ring"
          style={{ "--progress": "92%" } as React.CSSProperties}
        >
          <div>
            <strong>92%</strong>
            
          </div>
        </div>
        <div className="attendance-copy">
          <h2>Frequência geral</h2>
          
          <p>Você está acima da frequência mínima de 75%.</p>
        </div>
        <div className="attendance-stats">
          <div>
            <strong>4</strong>
            <span>faltas</span>
          </div>
          <div>
            <strong>48</strong>
            <span>aulas dadas</span>
          </div>
        </div>
      </section>
      <section className="content-section profile-content">
        <div className="section-title">
          <div>
           
            <h2>Minhas redações</h2>
          </div>
          
        </div>
        <div className="essay-history">
          {studentEssays.map((essay, index) => (
            <article
              className={`essay-card ${openEssay === index ? "open" : ""}`}
              key={essay.title}
            >
              <button
                onClick={() => setOpenEssay(openEssay === index ? -1 : index)}
              >
                <div className="score">
                  <strong>{essay.score}</strong>
                  <span>/1000</span>
                </div>
                <div className="essay-info">
                  <time>{essay.date}</time>
                  <h3>{essay.title}</h3>
                </div>
                <span className="expand">
                  <Icon name="chevron" size={20} />
                </span>
              </button>
              {openEssay === index && (
                <div className="feedback">
                  <span>Feedback do corretor</span>
                  <p>“{essay.feedback}”</p>
                  <button>
                    Ver correção completa <span>→</span>
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

const subjects = [
  {
    name: "Matemática",
    teacher: "Prof. André",
    topic: "Funções exponenciais e logarítmicas",
    color: "#10afb2",
    code: "MAT",
  },
  {
    name: "Português",
    teacher: "Profª. Camila",
    topic: "Interpretação e gêneros textuais",
    color: "#17335f",
    code: "POR",
  },
  {
    name: "Biologia",
    teacher: "Profª. Renata",
    topic: "Genética: 1ª e 2ª leis de Mendel",
    color: "#168f95",
    code: "BIO",
  },
  {
    name: "História",
    teacher: "Profª. Lúcia",
    topic: "Era Vargas e industrialização",
    color: "#345a88",
    code: "HIS",
  },
  {
    name: "Física",
    teacher: "Prof. Rafael",
    topic: "Cinemática e movimento uniforme",
    color: "#087e8b",
    code: "FIS",
  },
  {
    name: "Química",
    teacher: "Prof. Pedro",
    topic: "Estequiometria e soluções",
    color: "#5d77a0",
    code: "QUI",
  },
  {
    name: "Geografia",
    teacher: "Profª. Beatriz",
    topic: "Urbanização e redes urbanas brasileiras",
    color: "#269fa5",
    code: "GEO",
  },
  {
    name: "Literatura",
    teacher: "Profª. Camila",
    topic: "Modernismo brasileiro: primeira fase",
    color: "#496d98",
    code: "LIT",
  },
]

const weeklyMaterials = [
  {
    week: "Semana 18",
    date: "09—15 JUN",
    current: true,
    topic: "Funções exponenciais e logarítmicas",
    files: [
      "Slides da aula — Logaritmos.pdf",
      "Lista 06 — Funções.pdf",
      "Gabarito da lista 05.pdf",
    ],
  },
  {
    week: "Semana 17",
    date: "02 JUN - 08 JUN",
    topic: "Progressões aritméticas e geométricas",
    files: ["Resumo — PA e PG.pdf", "Lista 05 — Progressões.pdf"],
  },
  {
    week: "Semana 16",
    date: "26 MAI - 01 JUN",
    topic: "Função do segundo grau",
    files: ["Slides — Função quadrática.pdf", "Lista de revisão.pdf"],
  },
]

function SubjectDetail({
  subject,
  onBack,
  teacher = false,
  materials = [],
  onEdit,
  onDelete,
}: {
  subject: typeof subjects[number]
  onBack: () => void
  teacher?: boolean
  materials?: PublishedMaterial[]
  onEdit?: (material: PublishedMaterial) => void
  onDelete?: (material: PublishedMaterial) => void
}) {
  return (
    <>
      <header
        className="detail-header"
        style={{ "--subject": subject.color } as React.CSSProperties}
      >
        <button onClick={onBack} aria-label="Voltar">
          <Icon name="arrow" />
        </button>
        <div>
          <p>
            {subject.code} · {subject.teacher}
          </p>
          <h1>{subject.name}</h1>
        </div>
      </header>
      <section className="content-section detail-content">
        <div className="section-title">
          <div>
            <h2>Materiais por semana</h2>
          </div>
        </div>
        <div className="week-list">
          {weeklyMaterials.map((item) => {
            const subjectMaterials = teacher
              ? materials.filter(
                  (material) =>
                    material.subject === subject.name && material.week === item.week,
                )
              : []
            const files = teacher
              ? subjectMaterials.map((material) => material.file || material.title)
              : item.files

            return (
              <article
                className={`week-card ${item.current ? "current" : ""}`}
                key={item.week}
              >
                <header>
                  <div>
                    <span>{item.current ? "Semana atual" : item.date}</span>
                    <h3>{item.week}</h3>
                  </div>
                  {item.current && <b>Agora</b>}
                </header>
                <p>{item.topic}</p>
                <div className="file-list">
                  {teacher
                    ? subjectMaterials.map((material) => (
                        <div className="material-file-row editable" key={material.id}>
                          <button>
                            <span className="file-icon">
                              <Icon name="file" size={20} />
                            </span>
                            <span>
                              {material.title}
                              <small>{material.file} · Material de aula</small>
                            </span>
                            <Icon name="download" size={20} />
                          </button>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <button
                              className="edit-file"
                              onClick={() => onEdit?.(material)}
                              aria-label={`Editar ${material.title}`}
                              title="Editar material"
                            >
                              <Icon name="edit" size={17} />
                            </button>
                            <button
                              className="edit-file delete-action"
                              onClick={() => onDelete?.(material)}
                              aria-label={`Apagar ${material.title}`}
                              title="Apagar material"
                            >
                              <Icon name="trash" size={17} />
                            </button>
                          </div>
                        </div>
                      ))
                    : files.map((file) => (
                        <div className="material-file-row" key={file}>
                          <button>
                            <span className="file-icon">
                              <Icon name="file" size={20} />
                            </span>
                            <span>
                              {file}
                              <small>PDF · Material de aula</small>
                            </span>
                            <Icon name="download" size={20} />
                          </button>
                        </div>
                      ))}
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

function Materials({
  teacher = false,
  materials = [],
  onEdit,
  onDelete,
}: {
  teacher?: boolean;
  materials?: PublishedMaterial[];
  onEdit?: (material: PublishedMaterial) => void;
  onDelete?: (material: PublishedMaterial) => void;
} = {}) {
  const [subject, setSubject] = useState<typeof subjects[number] | null>(null)
  if (subject)
    return (
      <SubjectDetail
        subject={subject}
        onBack={() => setSubject(null)}
        teacher={teacher}
        materials={materials}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    )
  return (
    <>
      <header className="simple-header materials-header">
        
        <h1>Semana 18</h1>
        <span>09 a 15 de junho</span>
      </header>
      <section className="content-section materials-content">
        <div className="section-title">
          <div>
           
            <h2>Materiais</h2>
          </div>
         
        </div>
        <div className="subject-grid">
          {subjects.map((item) => (
            <button
              className="subject-card"
              key={item.name}
              onClick={() => setSubject(item)}
              style={{ "--subject": item.color } as React.CSSProperties}
            >
             
              <span className="subject-text">
                <small>{item.teacher}</small>
                <strong>{item.name}</strong>
                <p>{item.topic}</p>
              </span>
              <span className="subject-arrow">
                <Icon name="chevron" size={18} />
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}

function Modal({
  title,
  onClose,
  children,
}: {
  title: string
  onClose: () => void
  children: ReactNode
}) {
  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        zIndex: 1000,
      }}
    >
      <div
        className="modal-sheet"
        style={{
          width: "min(100%, 560px)",
          maxHeight: "calc(100vh - 48px)",
          overflowY: "auto",
          margin: "auto",
          borderRadius: "20px",
        }}
      >
        <header>
          <div>
            <p className="eyebrow">Gerenciamento</p>
            <h2>{title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Fechar">
            ×
          </button>
        </header>
        {children}
      </div>
    </div>
  )
}

function TeacherMural({
  notices,
  setNotices,
}: {
  notices: Notice[];
  setNotices: React.Dispatch<React.SetStateAction<Notice[]>>;
}) {
  const [editing, setEditing] = useState<Notice | null | "new">(null)

  function saveNotice(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const values = {
      title: String(data.get("title")),
      text: String(data.get("description")),
      type: String(data.get("category")),
    }
    if (editing === "new") {
      setNotices((items) => [
        {
          id: Date.now(),
          ...values,
          author: "Você",
          time: "Agora",
          color: values.type === "Atividade" ? "blue" : "green",
          active: true,
        },
        ...items,
      ])
    } else if (editing) {
      setNotices((items) =>
        items.map((item) =>
          item.id === editing.id ? { ...item, ...values } : item,
        ),
      )
    }
    setEditing(null)
  }

  return (
    <>
      <header className="teacher-header">
        <div>
          
          <h1>Mural</h1>
        </div>
        <span className="teacher-avatar">PR</span>
      </header>
      <section className="weekly-essay">
        <div className="essay-label">
          <Icon name="pin" size={16} /> Redação da semana
        </div>
        <h2>Os desafios da inclusão digital no Brasil</h2>
        <div className="deadline">
          <Icon name="clock" size={18} />
          <span>
            Entrega até <strong>domingo, 23:59</strong>
          </span>
          <b>Ativa</b>
        </div>
      </section>
      <section className="content-section teacher-content">
        <div className="section-title">
          <div>
            
            <h2>Avisos</h2>
          </div>
          
        </div>
        <div className="notice-list">
          {notices.map((notice) => (
            <article className="notice-card teacher-notice" key={notice.id}>
              <div className={`notice-marker ${notice.color}`} />
              <div className="notice-content">
                <div className="card-topline">
                  <span className={`notice-type ${notice.color}`}>
                    {notice.type}
                  </span>
                  <span
                    className={notice.active ? "status-active" : "status-ended"}
                  >
                    {notice.active ? "Ativo" : "Expirado"}
                  </span>
                </div>
                <h3>{notice.title}</h3>
                <p>{notice.text}</p>
                <footer>
                  <span>{notice.author}</span>
                  <div className="notice-actions" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button
                      className="text-action"
                      onClick={() => setEditing(notice)}
                      aria-label={`Editar aviso ${notice.title}`}
                      title="Editar aviso"
                    >
                      <Icon name="edit" size={17} />
                    </button>
                    <button
                      className="text-action delete-action"
                      onClick={() => {
                        if (window.confirm(`Apagar o aviso "${notice.title}"?`)) {
                          setNotices((items) => items.filter((item) => item.id !== notice.id))
                        }
                      }}
                      aria-label={`Apagar aviso ${notice.title}`}
                      title="Apagar aviso"
                    >
                      <Icon name="trash" size={17} />
                    </button>
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
      <button
        className="floating-action"
        onClick={() => setEditing("new")}
        aria-label="Adicionar aviso"
      >
        <Icon name="plus" size={28} />
      </button>
      {editing && (
        <Modal
          title={editing === "new" ? "Novo aviso" : "Editar aviso"}
          onClose={() => setEditing(null)}
        >
          <form className="management-form" onSubmit={saveNotice}>
            <label>
              Título do aviso
              <input
                name="title"
                defaultValue={editing === "new" ? "" : editing.title}
                required
              />
            </label>
            <label>
              Descrição
              <textarea
                name="description"
                defaultValue={editing === "new" ? "" : editing.text}
                required
              />
            </label>
            <div className="form-row">
              <label>
                Categoria
                <select
                  name="category"
                  defaultValue={editing === "new" ? "Aviso" : editing.type}
                >
                  <option>Importante</option>
                  <option>Atividade</option>
                  <option>Aviso</option>
                </select>
              </label>
              <label>
                Data de expiração
                <input name="expiration" type="date" required />
              </label>
            </div>
            <button className="primary-button" type="submit">
              {editing === "new" ? "Publicar aviso" : "Salvar alterações"}{" "}
              <span>→</span>
            </button>
          </form>
        </Modal>
      )}
    </>
  )
}

const initialPublishedMaterials: PublishedMaterial[] = [
  {
    id: 1,
    title: "Slides — Funções logarítmicas",
    description: "Apresentação utilizada na aula.",
    subject: "Matemática",
    week: "Semana 18",
    file: "funcoes-logaritmicas.pdf",
  },
  {
    id: 2,
    title: "Lista 06 — Trigonometria",
    description: "Exercícios para a próxima aula.",
    subject: "Matemática",
    week: "Semana 18",
    file: "lista-06.pdf",
  },
  {
    id: 3,
    title: "Resumo — Modernismo",
    description: "Mapa de autores e principais obras.",
    subject: "Literatura",
    week: "Semana 18",
    file: "modernismo.pdf",
  },
]

function TeacherMaterials({
  materials,
  setMaterials,
}: {
  materials: PublishedMaterial[];
  setMaterials: React.Dispatch<React.SetStateAction<PublishedMaterial[]>>;
}) {
  const [editing, setEditing] = useState<PublishedMaterial | null | "new">(null)

  function saveMaterial(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const values = {
      title: String(data.get("title")),
      description: String(data.get("description")),
      subject: String(data.get("subject")),
      week: String(data.get("week")),
      file: String(data.get("file")) || "material-anexado.pdf",
    }
    if (editing === "new")
      setMaterials((items) => [{ id: Date.now(), ...values }, ...items])
    else if (editing)
      setMaterials((items) =>
        items.map((item) =>
          item.id === editing.id ? { ...item, ...values } : item,
        ),
      )
    setEditing(null)
  }

  function deleteMaterial(material: PublishedMaterial) {
    if (window.confirm(`Apagar o material "${material.title}"?`)) {
      setMaterials((items) => items.filter((item) => item.id !== material.id))
    }
  }

  return (
    <>
      <Materials
        teacher
        materials={materials}
        onEdit={(material) => setEditing(material)}
        onDelete={deleteMaterial}
      />
      <button
        className="floating-action"
        onClick={() => setEditing("new")}
        aria-label="Adicionar material"
      >
        <Icon name="plus" size={28} />
      </button>
      {editing && (
        <Modal
          title={editing === "new" ? "Novo material" : "Editar material"}
          onClose={() => setEditing(null)}
        >
          <form className="management-form" onSubmit={saveMaterial}>
            <label>
              Título do material
              <input
                name="title"
                defaultValue={editing === "new" ? "" : editing.title}
                required
              />
            </label>
            <label>
              Descrição
              <textarea
                name="description"
                defaultValue={editing === "new" ? "" : editing.description}
                required
              />
            </label>
            <div className="form-row">
              <label>
                Disciplina
                <select
                  name="subject"
                  defaultValue={
                    editing === "new" ? "Matemática" : editing.subject
                  }
                >
                  {subjects.map((subject) => (
                    <option key={subject.name}>{subject.name}</option>
                  ))}
                </select>
              </label>
              <label>
                Semana
                <select
                  name="week"
                  defaultValue={editing === "new" ? "Semana 18" : editing.week}
                >
                  <option>Semana 18</option>
                  <option>Semana 17</option>
                  <option>Semana 16</option>
                </select>
              </label>
            </div>
            <label>
              Anexar arquivo
              <input
                name="file"
                type="file"
                accept=".pdf,.ppt,.pptx,.doc,.docx"
              />
            </label>
            <button className="primary-button" type="submit">
              {editing === "new" ? "Publicar material" : "Salvar alterações"}{" "}
              <span>→</span>
            </button>
          </form>
        </Modal>
      )}
    </>
  )
}

const enrolledStudents = [
  "Mariana Souza",
  "Lucas Almeida",
  "Ana Clara Ribeiro",
  "João Pedro Santos",
  "Beatriz Oliveira",
  "Rafael Costa",
  "Sofia Martins",
  "Gabriel Ferreira",
]

function Attendance() {
  const [absent, setAbsent] = useState<string[]>([])
  const [saved, setSaved] = useState(false)
  function toggle(name: string) {
    setSaved(false)
    setAbsent((items) =>
      items.includes(name)
        ? items.filter((item) => item !== name)
        : [...items, name],
    )
  }
  return (
    <>
      <header className="teacher-header">
        <div>
          
          <h1>Registro de Frequência</h1>
        </div>
        <span className="teacher-avatar">PR</span>
      </header>
      <section className="content-section attendance-page">
        <div className="filter-card">
          <label>
            Disciplina
            <select>
              <option>Matemática</option>
              <option>Português</option>
              <option>Literatura</option>
            </select>
          </label>
          <label>
            Data da aula
            <input type="date" defaultValue="2025-06-18" />
          </label>
        </div>
        <div className="student-list">
          {enrolledStudents.map((student, index) => {
            const isPresent = !absent.includes(student)
            return (
              <article key={student}>
                <span className="student-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{student}</strong>
                <button
                  className={isPresent ? "present attendance-status-button" : "absent attendance-status-button"}
                  onClick={() => toggle(student)}
                  aria-label={`${student}: ${isPresent ? "presente" : "ausente"}`}
                  title={isPresent ? "Presente" : "Ausente"}
                  style={{ width: 42, height: 42, padding: 0, justifyContent: "center" }}
                >
                  <Icon name={isPresent ? "check" : "plus"} size={19} />
                </button>
              </article>
            )
          })}
        </div>
        <button className="save-attendance" onClick={() => setSaved(true)}>
          <Icon name="check" size={20} />
          {saved ? "Chamada salva" : "Salvar chamada"}
        </button>
      </section>
    </>
  )
}

function TeacherEssays({
  essays,
  setEssays,
}: {
  essays: Essay[];
  setEssays: React.Dispatch<React.SetStateAction<Essay[]>>;
}) {
  const [selected, setSelected] = useState<Essay | null>(null)
  const pending = essays.filter((essay) => essay.status === "Pendente").length
  function saveCorrection(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!selected) return
    const data = new FormData(event.currentTarget)
    setEssays((items) => {
      const updated = items.map((essay) =>
        essay.id === selected.id
          ? {
              ...essay,
              score: String(data.get("score")),
              feedback: String(data.get("feedback")),
              status: "Corrigida",
            }
          : essay,
      )
      localStorage.setItem("trilha-essays", JSON.stringify(updated))
      return updated
    })
    setSelected(null)
  }
  return (
    <>
      <header className="teacher-header">
        <div>
          
          <h1>Redações</h1>
        </div>
        
      </header>
      <section className="content-section teacher-content">
        <div className="section-title">
          <div>
           
            <h2>Textos enviados</h2>
          </div>
          
        </div>
        <div className="submission-list">
          {essays.map((essay) => (
            <button key={essay.id} onClick={() => setSelected(essay)}>
              <span className="student-initial">
                {essay.student
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <span>
                <strong>{essay.student}</strong>
                <small>{essay.title}</small>
              </span>
              <b
                className={
                  essay.status === "Pendente" ? "pending" : "corrected"
                }
              >
                {essay.status}
              </b>
              <Icon name="chevron" size={18} />
            </button>
          ))}
        </div>
      </section>
      {selected && (
        <Modal title="Corrigir redação" onClose={() => setSelected(null)}>
          <div className="correction-student">
            <span>Aluno</span>
            <strong>{selected.student}</strong>
            <small>{selected.title}</small>
          </div>
          <form className="management-form" onSubmit={saveCorrection}>
            <label>
              Nota (0 a 1000)
              <input
                name="score"
                type="number"
                min="0"
                max="1000"
                defaultValue={selected.score}
                required
              />
            </label>
            <label>
              Feedback do corretor
              <textarea
                name="feedback"
                rows={7}
                defaultValue={selected.feedback}
                placeholder="Comente os pontos fortes e o que pode ser melhorado..."
                required
              />
            </label>
            <button className="primary-button" type="submit">
              Salvar correção <span>→</span>
            </button>
          </form>
        </Modal>
      )}
    </>
  )
}

const navItems: { id: Screen; label: string; icon: IconName }[] = [
  { id: "mural", label: "Mural", icon: "home" },
  { id: "perfil", label: "Perfil", icon: "user" },
  { id: "materiais", label: "Materiais", icon: "book" },
]

function Platform({ notices, essays }: { notices: Notice[]; essays: Essay[] }) {
  const [screen, setScreen] = useState<Screen>("mural")
  return (
    <main className="app-shell">
      <div className="app-view">
        {screen === "mural" && <Mural notices={notices} />}
        {screen === "perfil" && <Profile essays={essays} />}
        {screen === "materiais" && <Materials />}
      </div>
      <nav className="bottom-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={screen === item.id ? "active" : ""}
            onClick={() => setScreen(item.id)}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </main>
  )
}

const teacherNavItems: { id: TeacherScreen; label: string; icon: IconName }[] = [
  { id: "mural", label: "Mural", icon: "home" },
  { id: "materiais", label: "Materiais", icon: "book" },
  { id: "frequencia", label: "Frequência", icon: "check" },
  { id: "redacoes", label: "Redações", icon: "file" },
]

function TeacherPlatform({
  notices,
  setNotices,
  essays,
  setEssays,
  materials,
  setMaterials,
}: {
  notices: Notice[]
  setNotices: React.Dispatch<React.SetStateAction<Notice[]>>
  essays: Essay[]
  setEssays: React.Dispatch<React.SetStateAction<Essay[]>>
  materials: PublishedMaterial[];
  setMaterials: React.Dispatch<React.SetStateAction<PublishedMaterial[]>>;
}) {
  const [screen, setScreen] = useState<TeacherScreen>("mural")
  return (
    <main className="app-shell">
      <div className="app-view">
        {screen === "mural" && (
          <TeacherMural notices={notices} setNotices={setNotices} />
        )}
        {screen === "materiais" && (
          <TeacherMaterials materials={materials} setMaterials={setMaterials} />
        )}
        {screen === "frequencia" && <Attendance />}
        {screen === "redacoes" && (
          <TeacherEssays essays={essays} setEssays={setEssays} />
        )}
      </div>
      <nav
        className="bottom-nav teacher-nav"
        aria-label="Navegação do professor"
      >
        {teacherNavItems.map((item) => (
          <button
            key={item.id}
            className={screen === item.id ? "active" : ""}
            onClick={() => setScreen(item.id)}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </main>
  )
}

export default function App() {
  const [role, setRole] = useState<Role | null>(null)
  const [notices, setNotices] = useState<Notice[]>(initialNotices)
  const [essays, setEssays] = useState<Essay[]>(() => {
    const saved = localStorage.getItem("trilha-essays")
    return saved ? JSON.parse(saved) : initialEssays
  })
  const [materials, setMaterials] = useState<PublishedMaterial[]>(
    initialPublishedMaterials,
  )
  if (!role) return <Login onLogin={setRole} />
  if (role === "professor")
    return (
      <TeacherPlatform
        notices={notices}
        setNotices={setNotices}
        essays={essays}
        setEssays={setEssays}
        materials={materials}
        setMaterials={setMaterials}
      />
    )
  return <Platform notices={notices} essays={essays} />
}
