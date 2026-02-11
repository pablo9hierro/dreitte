// Redireciona / para /api/catalogo-simples
export default function Home() {
  if (typeof window !== 'undefined') {
    window.location.href = '/api/catalogo-simples';
  }
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/api/catalogo-simples',
      permanent: false,
    },
  };
}
