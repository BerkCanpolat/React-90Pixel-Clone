const Capabilities = () => {
  return (
    <section className='bg-zinc-950 px-4 md:px-0'>
        <div className='max-w-7xl mx-auto pt-40 pb-150'>
            <div>
        <h1 className='text-white mb-5'>Yeteneklerimiz</h1>
        <h1 className='text-white text-2xl md:text-4xl md:max-w-325'>Yeni teknolojilere olan deneyim ve tutkumuzla, eğitim teknolojileri ve insan kaynakları alanlarında kullanıcı dostu ürünler ve çözümler geliştiriyoruz.</h1>
            </div>
            <div className='flex flex-col items-start md:flex-row md:items-center justify-between text-white mt-15'>
                <div className="mb-10 md:mb-0">
                    <p className='text-gray-500 text-sm mb-1.5'>01</p>
                    <h1 className='text-gray-400/95 text-4xl font-bold'>Eğitim <br /> Teknolojileri</h1>
                </div>
                <div className="mb-10 md:mb-0">
                    <p className='text-gray-500 text-sm mb-1.5'>02</p>
                    <h1 className='text-gray-400/95 text-4xl font-bold'>İnsan Kaynakları <br /> Teknolojileri</h1>
                </div>
                <div>
                    <p className='text-gray-500 text-sm mb-1.5'>03</p>
                    <h1 className='text-gray-400/95 text-4xl font-bold'>Özel Yazılım <br /> Geliştirme</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Capabilities