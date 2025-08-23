const form = document.getElementById("predict-form");
const hasilDiv = document.getElementById("hasil");
const historyList = document.getElementById("history-list");

// Submit form prediksi
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    luas_m2: parseFloat(document.getElementById("luas").value),
    jumlah_kamar: parseInt(document.getElementById("kamar").value),
    jarak_kampus_km: parseFloat(document.getElementById("jarak").value)
  };

  try {
    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    hasilDiv.className = "result";
    hasilDiv.innerHTML = `<strong>Prediksi harga: Rp ${result.prediksi_harga.toLocaleString()}</strong>`;
    
    // Refresh histori setelah prediksi
    loadHistory();
  } catch (err) {
    hasilDiv.className = "result error";
    hasilDiv.innerHTML = `<strong>Error:</strong> ${err}`;
  }
});

// Load histori
async function loadHistory() {
  try {
    const res = await fetch("http://127.0.0.1:8000/history");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (!data.history || data.history.length === 0) {
      historyList.innerHTML = "<p>Belum ada histori prediksi.</p>";
      return;
    }

    historyList.innerHTML = data.history.map(item => {
      const date = new Date(item.timestamp).toLocaleString();
      const input = item.input || {};
      const luas = input.luas_m2 ?? "-";
      const kamar = input.jumlah_kamar ?? "-";
      const jarak = input.jarak_kampus_km ?? "-";
      const harga = item.prediksi_harga ?? 0;

      return `
        <div class="history-item">
          <div class="history-header">${date}</div>
          <div>Luas: ${luas} m² | Kamar: ${kamar} | Jarak: ${jarak} km</div>
          <div><strong>Prediksi: Rp ${Number(harga).toLocaleString()}</strong></div>
        </div>
      `;
    }).join("");
  } catch (err) {
    historyList.innerHTML = `<p class="error">Error loading histori: ${err}</p>`;
  }
}

// Refresh button
document.getElementById("refresh-history").addEventListener("click", loadHistory);

// Load histori saat halaman dibuka
loadHistory();