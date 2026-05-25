var Animaux = {
    async getAll() {
        const res = await fetch('animaux.json');
        if (!res.ok)
            throw new Error('Network response was not ok');
        return (await res.json())
            .filter(a => a.region && a.alimentation && a.biologie && a.habitat && a.modedevie)
    }
}