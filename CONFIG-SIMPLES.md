# Como Configurar

## 1. No Stevo

- **Criatividade:** 0.0 (zero)
- **RAG:** ATIVADO
- **Arquivo:** Faça UPLOAD de `catalogo-completo.txt`
  - Vá em: RAG → Upload de arquivos
  - Selecione: `public/catalogo-completo.txt`
  - Aguarde indexação (30-60 segundos)

## 2. Cole o Prompt

Copie tudo de `PROMPT-FINAL-MVP.md` e cole no Stevo.

## 3. Teste

Digite: `jaleco feminino amarelo`

Deve retornar 3 produtos (Heloisa, Rute, Dani).

---

## Por Que Arquivo em Vez de URL?

O RAG do Stevo lê arquivos TXT muito melhor que páginas HTML.
Arquivo = 100% confiável. URL = pode falhar.

---

## Se Ainda Não Funcionar

1. Confirme criatividade = 0.0
2. Verifique se arquivo foi indexado (ícone verde)
3. Teste com produto simples: "jaleco masculino amarelo"
4. Se retornar link com `dreitte.vercel.app` → RAG não leu o arquivo

Pronto.
