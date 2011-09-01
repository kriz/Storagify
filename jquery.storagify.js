(function ($){

	//name our plugin after "$.fn.". in this case our plugin name is simpleSpy
	$.fn.storagify = function(storageKey){
		
		return this.each(function(){
			var $this = $(this);
			$this.attr('contenteditable','');
			$this.text(localStorage.getItem(storageKey));
			
			$this.blur(function(){
				localStorage.setItem(storageKey,$this.text());
			});
		});
	};

})(jQuery);