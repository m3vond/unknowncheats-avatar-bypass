/*
 * @project unknowncheats-avatar-bypass
 * @author m3vond
 * @url https://github.com/m3vond
 */
document.querySelector('input[type="file"][name="upload"]').click();

document.querySelector('input[type="file"][name="upload"]')
  .addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    const reader = new FileReader();
      
    reader.onload = function(e) {
      const img = new Image();
      img.src = e.target.result;
  
      img.onload = function() {
        //
        // Minimum width & height of avatar
        //
        img.width = 200;
        img.height = 200;
        
        document.body.appendChild(img);
      };
    };
    reader.readAsDataURL(file);
  });
