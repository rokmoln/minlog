ifeq (,$(wildcard support-firecloud/Makefile))
INSTALL_SUPPORT_FIRECLOUD := $(shell git submodule update --init --recursive support-firecloud)
ifneq (,$(filter undefine,$(.FEATURES)))
undefine INSTALL_SUPPORT_FIRECLOUD
endif
endif

include support-firecloud/repo/mk/node.common.mk
include support-firecloud/repo/mk/js.build.dts.mk
include support-firecloud/repo/mk/js.check.eslint.mk
include support-firecloud/repo/mk/js.check.tsc.mk
include support-firecloud/repo/mk/js.test.jest.mk
include support-firecloud/repo/mk/core.misc.release.npg.mk

# ------------------------------------------------------------------------------

# ------------------------------------------------------------------------------
