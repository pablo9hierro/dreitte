# Como Configurar

## 1. No Stevo

- **Criatividade:** 0.0 (zero)
- **RAG:** ATIVADO
- **URL:** `https://dreitte.vercel.app/api/catalogo-texto`
  - Vá em: RAG → Sites/URLs
  - Adicione essa URL
  - Aguarde indexação (30-60 segundos)

## 2. Cole o Prompt

Copie tudo de `PROMPT-FINAL-MVP.md` e cole no Stevo.

## 3. Teste

Digite: `jaleco feminino amarelo`

Deve retornar 3 produtos (Heloisa, Rute, Dani).

---

## Por Que URL /api/catalogo-texto?

✅ **Retorna texto puro** (não HTML) → RAG lê 100%  
✅ **Atualiza automaticamente** quando você adicionar produtos  
✅ **Tempo real** via seu script de scraping  

Quando você atualizar os JSON → a API já retorna dados novos → Stevo vê

---

## Sistema Completo de Atualização

Veja: [SISTEMA-TEMPO-REAL.md](SISTEMA-TEMPO-REAL.md)

Como integrar scraping + atualização automática.

---

## Se Ainda Não Funcionar

1. Confirme criatividade = 0.0
2. Teste a URL no navegador: deve retornar texto puro
3. Verifique se Stevo indexou a URL (ícone verde)
4. Force re-indexação manual se necessário

Pronto.
