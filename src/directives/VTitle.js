const updatePageTitle = function (title) {
	document.title = title;
};

export default {
	mounted: (el, binding) => updatePageTitle(binding.value || el.innerText),
	beforeUpdate: (el, binding) => updatePageTitle(binding.value || el.innerText),
	updated: (el, binding) => updatePageTitle(binding.value || el.innerText),
};
