function Calculadora() {
  const numero1 = 5
  const numero2 = 3

  return (
    <p style={{ fontSize: '24px', color: 'blue' }}> 
      La suma de {numero1} y {numero2} es: {numero1 + numero2}
    </p>
  )
}

export default Calculadora
